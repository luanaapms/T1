export default class Produto {
    id: string
    nome: string
    preco: number
    vendas: number

    constructor(id: string, nome: string, preco: number) {
        this.id = id
        this.nome = nome
        this.preco = preco
        this.vendas = 0
    }

    get getId(): string {
        return this.id
    }
}