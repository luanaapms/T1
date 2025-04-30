import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import { Genero } from "../modelos/genero";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    private listarTelefones(cliente: Cliente): void {
        console.log(`\nTelefones do cliente:`);
        cliente.getTelefones.forEach((telefone, index) => {
            console.log(`${index} - (${telefone.getDdd}) ${telefone.getNumero}`);
        });
    }

    public atualizar(): void {
        console.log(`\nAtualizar cliente`);

        let cpfInput = this.entrada.receberTexto(`Por favor informe o CPF do cliente que deseja atualizar: `);
        let clienteExistente = this.clientes.find(cliente => cliente.getCpf.getValor === cpfInput);

        if (clienteExistente) {
            let nome = this.entrada.receberTexto(`Novo nome do cliente (${clienteExistente.nome}): `) || clienteExistente.nome;
            let nomeSocial = this.entrada.receberTexto(`Novo nome social do cliente (${clienteExistente.nomeSocial}): `) || clienteExistente.nomeSocial;
            
            let generoSocial = this.entrada.receberTexto(`Novo gênero do cliente (${clienteExistente.getGenero}): `);
            let genero = generoSocial ? generoSocial as Genero : clienteExistente.getGenero;
        
            clienteExistente.nome = nome;
            clienteExistente.nomeSocial = nomeSocial;
            clienteExistente.setGenero = genero; 

            if (clienteExistente.getTelefones.length > 0) {
                let editTelefone = this.entrada.receberTexto(`O cliente possui telefone(s) cadastrado(s). Deseja EDITAR algum? (s/n): `);
                if (editTelefone.toLowerCase() === 's') {
                    this.listarTelefones(clienteExistente);
                    let indiceTelefone = parseInt(this.entrada.receberTexto(`Informe o índice do telefone que deseja editar: `));
                    if (indiceTelefone >= 0 && indiceTelefone < clienteExistente.getTelefones.length) {
                        let telefone = clienteExistente.getTelefones[indiceTelefone];
                        let novoDDD = this.entrada.receberTexto(`Novo DDD do telefone (${telefone.getDdd}): `) || telefone.getDdd;
                        let novoNumero = this.entrada.receberTexto(`Novo número do telefone (${telefone.getNumero}): `) || telefone.getNumero;
                        telefone.setDdd = novoDDD; 
                        telefone.setNumero = novoNumero; 
                        console.log(`Telefone atualizado com sucesso.`);
                    } else {
                        console.log(`Índice inválido.`);
                    }
                } else {
                    console.log(`Nenhuma alteração foi feita nos telefones.`);
                }
            }
            console.log(`\nCliente atualizado com sucesso :)\n`);
        } else {
            console.log(`\nCliente com CPF ${cpfInput} não encontrado.`);
        }

        console.log(`\n`);
    }
}
