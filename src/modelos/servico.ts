export default class Servico {
    id: string
    nome: string
    preco: number
    vendas: number

    constructor(id: string, nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.id = id
        this.vendas = 0
    }

    get getId(): string {
        return this.id
    }
}