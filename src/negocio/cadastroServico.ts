import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../modelos/servico";

export default class CadastroServiço extends Cadastro{
    private serviços: Array<Servico>
    private entrada: Entrada
    constructor(serviços: Array<Servico>){
        super()
        this.serviços = serviços
        this.entrada = new Entrada()
    
    }
    public cadastrar(): void {
        console.log(`\nInicio do cadastro de um novo serviço`)

        let idServiço = this.entrada.receberTexto(`Digite o ID do novo serviço: `)
        let nomeServiço = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let precoServiço = this.entrada.receberNumero(`Informe o valor do serviço: `)

        let serviço = new Servico(idServiço, nomeServiço, precoServiço)
        this.serviços.push(serviço)
        
        console.log(`\nCadastro concluído :)\n`);
    }

}