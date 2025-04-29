import Entrada from "../io/entrada";
import Produto from "../modelos/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    
    }
    public cadastrar(): void {
        console.log(`\nInicio do cadastro de um novo produto`)
        
        let idProduto = this.entrada.receberTexto(`Digite o ID do novo produto: `);
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto: `)
        let precoProduto = this.entrada.receberNumero(`Informe o valor do produto: `)

        let produto = new Produto(idProduto, nomeProduto, precoProduto);
        this.produtos.push(produto)
        
        console.log(`\nCadastro concluído :)\n`);
    }

}