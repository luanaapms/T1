import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../modelos/servico";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    
    }
    public cadastrar(): void {
        console.log(`\nInicio do cadastro de um novo serviço`)

        let idServico = this.entrada.receberTexto(`Digite o ID do novo serviço: `)
        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let precoServico = this.entrada.receberNumero(`Informe o valor do serviço: `)

        let servico = new Servico(idServico, nomeServico, precoServico)
        this.servicos.push(servico)
        
        console.log(`\nCadastro concluído :)\n`);
    }

}