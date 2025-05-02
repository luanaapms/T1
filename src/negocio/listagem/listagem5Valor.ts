import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemMaiorValor extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n Lista TOP 5 clientes que mais consumiram em valor`)

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente disponível.\n")
            return
        }

        const clientesComValor = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos
                .reduce((soma, produto) => soma + produto.preco, 0)
            const totalServicos = cliente.getServicosConsumidos
                .reduce((soma, servico) => soma + servico.preco, 0)
            const total = totalProdutos + totalServicos
            return { cliente, total, totalProdutos, totalServicos }
        })

        const top5 = clientesComValor
            .sort((a, b) => b.total - a.total)
            .slice(0, 5)

        top5.forEach(({ cliente, total, totalProdutos, totalServicos }, index) => {
            console.log(`${index + 1}. ${cliente.nomeSocial}`)
            console.log(`   Valor em produtos: R$ ${totalProdutos.toFixed(2)}`)
            console.log(`   Valor em serviços: R$ ${totalServicos.toFixed(2)}`)
            console.log(`   Total de valor: R$ ${total.toFixed(2)}\n`)
            console.log(`--------------------------------------`);
        })
    }
}
