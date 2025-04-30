import Entrada from "../io/entrada";
import Servico from "../modelos/servico";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
    private serviços: Array<Servico>;
    private entrada: Entrada

    constructor(serviços: Array<Servico>) {
        super()
        this.serviços = serviços
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nAtualizar serviço`);

        let nomeInput = this.entrada.receberTexto(`Por favor informe o serviço que deseja atualizar: `);
        let serviçoExistente = this.serviços.find(serviço => serviço.nome === nomeInput);

        if (serviçoExistente) {
            let nome = this.entrada.receberTexto(`Novo nome do serviço (${serviçoExistente.nome}): `) || serviçoExistente.nome;
            let valor = this.entrada.receberNumero(`Novo valor do serviço (${serviçoExistente.preco}): `) || serviçoExistente.preco;
    
            serviçoExistente.nome = nome;
            serviçoExistente.preco = valor;

        console.log(`\nServiço atualizado com sucesso :)\n`);
        } else {
            console.log(`\nServiço cadastrado como ${nomeInput} não encontrado.`);
        }
        console.log(`\n`);
    }
}