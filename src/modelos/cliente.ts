import { Genero } from "./genero"
import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"


export default class Cliente {
    public nome: string
    public nomeSocial: string
    private genero: Genero
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    
    constructor(nome: string, nomeSocial: string, genero: Genero, cpf: CPF, rg: RG, telefone: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = [rg]
        this.dataCadastro = new Date()
        this.telefones = [telefone]
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getGenero(): Genero {
        return this.genero
    }
    public set setGenero(novoGenero: Genero) {
        this.genero = novoGenero;
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}