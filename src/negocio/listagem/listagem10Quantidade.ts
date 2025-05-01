import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemMaiorQuantidade extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n Lista TOP 10 clientes que mais consumiram em quantidade`)

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente encontrado.")
            return
        }

        const clientesOrdenados = this.clientes
            .map(cliente => ({
                cliente,
                totalProdutos: cliente.getProdutosConsumidos.length,
                totalServicos: cliente.getServicosConsumidos.length,
                totalConsumo: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            }))
            .sort((a, b) => b.totalConsumo - a.totalConsumo)

        const top10Mais = clientesOrdenados.slice(0, 10)

        top10Mais.forEach(({ cliente, totalProdutos, totalServicos, totalConsumo }, index) => {
            console.log(`${index + 1}. ${cliente.nomeSocial}`)
            console.log(`   Produtos consumidos: ${totalProdutos}`)
            console.log(`   Serviços consumidos: ${totalServicos}`)
            console.log(`   Total: ${totalConsumo}\n`)
        })
    }
}
