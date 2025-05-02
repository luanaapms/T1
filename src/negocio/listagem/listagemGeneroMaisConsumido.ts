import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";
import Entrada from "../../io/entrada";

export default class ListagemClienteGenero extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        this.listagemGenero()
    }

    private exibirRanking(titulo: string, contagem: { [nome: string]: number }): void {
        console.log(`\n ${titulo}`)
        const entradas = Object.entries(contagem)
        if (entradas.length === 0) {
            console.log('Não há nenhum item consumido.\n')
            return
        }

        entradas.sort((a, b) => b[1] - a[1])
        entradas.forEach(([nome, quantidade], index) => {
            console.log(`${index + 1}º Nome: ${nome}`)
            console.log(`Consumo: ${quantidade}\n`)
            console.log(`--------------------------------------`);
        })
    }

    public listagemGenero(): void {
        console.log(`\nLista de produtos e serviços mais consumidos por gênero\n`)
        console.log(`\nSelecione um genêro:`)
        console.log('1 - Masculino')
        console.log('2 - Feminino')
        console.log('0 - Sair\n')

        let opcaoGenero = this.entrada.receberTexto('Insira a opção escolhida: ')
        let clientesGeneroMasculino = this.clientes.filter(cliente => cliente.getGenero.toString() === "Masculino")
        let clientesGeneroFeminino = this.clientes.filter(cliente => cliente.getGenero.toString() === "Feminino")

        switch (opcaoGenero) {
            case "1":
                let contagemProdutosMas: { [nomeProduto: string]: number } = {}
                clientesGeneroMasculino.forEach(cliente => {
                    cliente.getProdutosConsumidos.forEach(produto => {
                        contagemProdutosMas[produto.nome] = (contagemProdutosMas[produto.nome] || 0) + 1
                    })
                })

                let contagemServMas: { [nomeServico: string]: number } = {}
                clientesGeneroMasculino.forEach(cliente => {
                    cliente.getServicosConsumidos.forEach(servico => {
                        contagemServMas[servico.nome] = (contagemServMas[servico.nome] || 0) + 1
                    })
                })

                this.exibirRanking(`Produtos mais consumidos pelo gênero Masculino`, contagemProdutosMas)
                this.exibirRanking(`Serviços mais consumidos pelo gênero Masculino`, contagemServMas)
                break

            case "2":
                let contagemProdFem: { [nomeProduto: string]: number } = {}
                clientesGeneroFeminino.forEach(cliente => {
                    cliente.getProdutosConsumidos.forEach(produto => {
                        contagemProdFem[produto.nome] = (contagemProdFem[produto.nome] || 0) + 1
                    })
                })

                let contagemServFem: { [nomeServico: string]: number } = {}
                clientesGeneroFeminino.forEach(cliente => {
                    cliente.getServicosConsumidos.forEach(servico => {
                        contagemServFem[servico.nome] = (contagemServFem[servico.nome] || 0) + 1
                    })
                })

                this.exibirRanking(`Produtos mais consumidos pelo gênero Feminino`, contagemProdFem)
                this.exibirRanking(`Serviços mais consumidos pelo gênero Feminino`, contagemServFem)
                break

            case "0":
                break
            default:
                console.log(`Saindo do menu`)
        }
    }
}
