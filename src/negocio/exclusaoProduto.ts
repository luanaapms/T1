import Entrada from "../io/entrada";
import Produto from "../modelos/produto";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao{
    private produtos: Array<Produto>;
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nExcluir produto`);
        let nomeInput = this.entrada.receberTexto(`Por favor informe o produto que deseja excluir: `);
        let produtoExistente = this.produtos.find(produto => produto.nome === nomeInput);

        if (produtoExistente) {
            const index = this.produtos.findIndex(produto => produto.nome === nomeInput);
            this.produtos.splice(index, 1);
            console.log(`Produto "${nomeInput}" excluído.`);
        } else {
            console.log(`Produto "${nomeInput}" não encontrado.`);
        }
    }
}