import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemMenorQuantidade extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n Lista TOP 10 clientes que menos consumiram produtos ou serviços`)

        if (this.clientes.length === 0) {
            console.log("Nenhum cliente encontrado.")
            return
        }

        const clientesOrdenados = this.clientes
            .map(cliente => {
                const totalProdutos = cliente.getProdutosConsumidos.length
                const totalServicos = cliente.getServicosConsumidos.length
                const totalConsumo = totalProdutos + totalServicos
                return {
                    cliente,
                    totalProdutos,
                    totalServicos,
                    totalConsumo
                }
            })
            .sort((a, b) => a.totalConsumo - b.totalConsumo)

        const top10MenosConsumidos = clientesOrdenados.slice(0, 10)

        top10MenosConsumidos.forEach(({ cliente, totalProdutos, totalServicos, totalConsumo }, index) => {
            console.log(`${index + 1}. ${cliente.nomeSocial}`)
            console.log(`   Produtos consumidos: ${totalProdutos}`)
            console.log(`   Serviços consumidos: ${totalServicos}`)
            console.log(`   Total de consumo: ${totalConsumo}\n`)
            console.log(`--------------------------------------`);
        })
    }
}
