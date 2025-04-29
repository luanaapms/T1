import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import { Genero } from "../modelos/genero";
import CPF from "../modelos/cpf";
import RG from "../modelos/rg";
import Telefone from "../modelos/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    private formatarData(data: string): Date {
        const [dia, mes, ano] = data.split('/').map(Number);
        return new Date(ano, mes - 1, dia);  
    }

    public cadastrar(): void {
        console.log(`\nCadastro do cliente`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Informe o nome social: `)
        let generoSocial = this.entrada.receberTexto(`Informe o gênero (M/F): `).toUpperCase()

        let valorCpf = this.entrada.receberTexto(`Informe o número do cpf: `);
        let dataCpf = this.entrada.receberTexto(`Informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);

        let valorRg = this.entrada.receberTexto(`Informe o rg: `);
        let dataRg = this.entrada.receberTexto(`Informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        
        let ddd = this.entrada.receberTexto(`Informe o DDD: `);
        let numero = this.entrada.receberTexto(`Informe o número de telefone: `);

        let dataEmissaoCpf = this.formatarData(dataCpf);
        let dataEmissaoRg = this.formatarData(dataRg);

        let genero: Genero
        if (generoSocial === "M") {
            genero = Genero.MASCULINO
        } else if (generoSocial === "F") {
            genero = Genero.FEMININO
        } else {
            genero = Genero.OUTRO
        }
        
        let cpf = new CPF(valorCpf, dataEmissaoCpf);
        let rg = new RG(valorRg, dataEmissaoRg);
        let telefone = new Telefone(ddd, numero);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf, rg, telefone);
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído! \n`);
    }
}