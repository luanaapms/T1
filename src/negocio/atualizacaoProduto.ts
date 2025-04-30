import Entrada from "../io/entrada";
import Produto from "../modelos/produto";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProdutos extends Atualizacao {
    private produtos: Array<Produto>;
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nAtualizar produto`);

        let nomeInput = this.entrada.receberTexto(`Por favor informe o produto que deseja atualizar: `);
        let produtoExistente = this.produtos.find(produto => produto.nome === nomeInput);

        if (produtoExistente) {
            let nome = this.entrada.receberTexto(`Novo nome do produto (${produtoExistente.nome}): `) || produtoExistente.nome;
            let valor = this.entrada.receberNumero(`Novo valor do produto (${produtoExistente.preco}): `) || produtoExistente.preco;
    
            produtoExistente.nome = nome;
            produtoExistente.preco = valor;

        console.log(`\nProduto atualizado com sucesso :)\n`);
        } else {
            console.log(`\nProduto "${nomeInput}" não encontrado.`);
        }
        console.log(`\n`);
    }
}