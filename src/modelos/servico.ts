export default class Servico {
    nome: string
    preco: string
    id: string
    vendas: number

    constructor(id: string, nome: string, preco: string) {
        this.nome = nome
        this.preco = preco
        this.id = id
        this.vendas = 0
    }

    get getId(): string {
        return this.id
    }
}