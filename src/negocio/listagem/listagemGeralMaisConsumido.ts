import Cliente from "../../modelos/cliente";
import Listagem from "./listagem";
import Entrada from "../../io/entrada";

export default class ListagemGeral extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        const exibirRanking = (titulo: string, consumidos: { [nome: string]: number }): void => {
            console.log(`\n${titulo}`);
            const entradas = Object.entries(consumidos);
            if (entradas.length === 0) {
                console.log("Nenhum item consumido.\n");
                return;
            }
    
            entradas.sort((a, b) => b[1] - a[1]);
            entradas.forEach(([nome, quantidade], index) => {
                console.log(`${index + 1}º ${nome}`);
                console.log(`Consumo: ${quantidade}\n`);
                console.log(`--------------------------------------`);
            });
        };
    
        console.log(`\n Lista geral de produtos mais consumidos`);
        const produtosConsumidos: { [nomeProduto: string]: number } = {};
    
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                produtosConsumidos[produto.nome] = (produtosConsumidos[produto.nome] || 0) + 1;
            });
        });
    
        exibirRanking("Produtos mais consumidos", produtosConsumidos);
    
        console.log(`\n Lista geral de serviços mais consumidos`);
        const servicosConsumidos: { [nomeServico: string]: number } = {};
    
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                servicosConsumidos[servico.nome] = (servicosConsumidos[servico.nome] || 0) + 1;
            });
        });
    
        exibirRanking("Serviços mais consumidos", servicosConsumidos);
    }
}    