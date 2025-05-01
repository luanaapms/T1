import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";
import Entrada from "../../io/entrada";

export default class ListagemGenero extends Listagem{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public listar(): void {
        console.log(`\nLista de todos os clientes em ordem por gênero`)
        this.clientes.sort((a, b) => a.getGenero.toString().localeCompare(b.getGenero.toString()))
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.getGenero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RG: ${cliente.getRgs.map(rg => rg.getValor).join(", ")}`);
            console.log(`Telefone: ` + cliente.getTelefones);
            console.log(`Produtos: ${cliente.getProdutosConsumidos.map(p => p.nome).join(", ")}`)
            console.log(`Serviços: ${cliente.getServicosConsumidos.map(s => s.nome).join(", ")}`)
            console.log(`--------------------------------------`);
        })
    }
}
