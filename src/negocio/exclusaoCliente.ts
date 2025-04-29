import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nExcluir cliente`);
        let cpfInput = this.entrada.receberTexto(`Por favor informe o CPF do cliente que deseja excluir: `);
        let clienteExistente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfInput);

        if (clienteExistente) {
            const index = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfInput);
            this.clientes.splice(index, 1);
            console.log(`Cliente com CPF ${cpfInput} excluído.`);
        } else {
            console.log(`Cliente com CPF ${cpfInput} não encontrado.`);
        }
    }
}
