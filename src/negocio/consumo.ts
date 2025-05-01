import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import Produto from "../modelos/produto";
import Servico from "../modelos/servico";

export default class Consumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public consumir(): void {
        let cpfInput = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `);
        let clienteConsumidor = this.clientes.find(cliente => cliente.getCpf.getValor === cpfInput);

        if (!clienteConsumidor) {
            console.log('Cliente não encontrado.')
        } else {
            let variavel = true

            while (variavel) {
                console.log('Para consumir:\n')
                console.log('1. Produto\n')
                console.log('2. Serviço\n')
                console.log('0. Sair')

                let entrada = new Entrada()
                let opcao = entrada.receberTexto(`Escolha a opção desejada:`);

                switch (opcao) {
                    case "1":
                        let idProduto = this.entrada.receberTexto(`Digite o ID do produto: `);
                        let produtoConsumido = this.produtos.find(produto => produto.getId === idProduto);

                        if (!produtoConsumido) {
                            console.log('Produto não encontrado.')
                        } else {
                            clienteConsumidor.getProdutosConsumidos.push(produtoConsumido)
                            produtoConsumido.vendas = produtoConsumido.vendas + 1
                        }
                        break
                    case "2":
                        let idServico = this.entrada.receberTexto(`Digite o ID do serviço: `);
                        let servicoConsumido = this.servicos.find(servico => servico.getId === idServico);

                        if (!servicoConsumido) {
                            console.log('Serviço não encontrado.')
                        } else {
                            clienteConsumidor.getServicosConsumidos.push(servicoConsumido)
                            servicoConsumido.vendas = servicoConsumido.vendas + 1
                        }
                        break
                    case "0":
                        variavel = false
                        console.log('\nSaindo do menu de consumo...\n');
                        break
                    default:
                        console.log('Opção inválida')
                        break
                }
            }
        }
    }
    
}