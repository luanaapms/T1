import Cliente from "../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
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
        });
        console.log(`\n`);
    }
}