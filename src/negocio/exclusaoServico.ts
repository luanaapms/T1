import Entrada from "../io/entrada";
import Servico from "../modelos/servico";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao{
    private serviços: Array<Servico>;
    private entrada: Entrada
    constructor(serviços: Array<Servico>) {
        super()
        this.serviços = serviços
        this.entrada = new Entrada()
    }

    public excluir(): void {
        console.log(`\nExcluir serviço`);
        let nomeInput = this.entrada.receberTexto(`Por favor informe o serviço que deseja excluir: `);
        let produtoExistente = this.serviços.find(produto => produto.nome === nomeInput);

        if (produtoExistente) {
            const index = this.serviços.findIndex(produto => produto.nome === nomeInput);
            this.serviços.splice(index, 1);
            console.log(`Serviço ${nomeInput} excluído.`);
        } else {
            console.log(`Serviço ${nomeInput} não encontrado.`);
        }
    }
}