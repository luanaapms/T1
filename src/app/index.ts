import Entrada from "../io/entrada";
import Empresa from "../modelos/empresa";
import { clientes, produtos, servicos } from "./dados";

import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import AtualizacaoProdutos from "../negocio/atualizacaoProduto";
import AtualizacaoServico from "../negocio/atualizacaoServico";

import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";

import ExclusaoCliente from "../negocio/exclusaoCliente";
import ExclusaoProduto from "../negocio/exclusaoProduto";
import ExclusaoServico from "../negocio/exclusaoServico";

import ListagemClientes from "../negocio/listagem/listagemCliente";
import ListagemProdutos from "../negocio/listagem/listagemProduto";
import ListagemServico from "../negocio/listagem/listagemServico";
import ListagemMaiorQuantidade from "../negocio/listagem/listagem10Quantidade";
import ListagemClienteGenero from "../negocio/listagem/listagemGeneroMaisConsumido";
import ListagemGeral from "../negocio/listagem/listagemGeralMaisConsumido";
import ListagemGenero from "../negocio/listagem/listagemGenero";
import ListagemMaiorValor from "../negocio/listagem/listagem5Valor";
import ListagemMenorQuantidade from "../negocio/listagem/listagem10Menos";



console.log(`============== Bem-vindo ao Grupo World Beauty ===============`)
let empresa = new Empresa()
clientes.forEach(cliente => empresa.getClientes.push(cliente))
produtos.forEach(produto => empresa.getProdutos.push(produto))
servicos.forEach(servico => empresa.getServicos.push(servico))

let execucao = true

while (execucao) {
    console.log(`Menu:`);
    console.log(`1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Listagens`);
    console.log(`0 - Sair\n`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    switch (opcao) {
        case 1:
            console.log(`\n Clientes: `)
            console.log('1 - Cadastrar')
            console.log('2 - Atualizar')
            console.log('3 - Excluir')
            console.log('4 - Listar todos os Clientes')
            console.log('0 - Voltar ao Menu\n')

            let opcaoCliente = entrada.receberNumero('Escolha uma opção: ')

            switch (opcaoCliente) {
                case 1:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break
                case 2:
                    let atualizarCliente = new AtualizacaoCliente(empresa.getClientes)
                    atualizarCliente.atualizar()
                    break
                case 3:
                    let exclusaoCliente = new ExclusaoCliente(empresa.getClientes)
                    exclusaoCliente.excluir()
                    break
                case 4:
                    let listagemCliente = new ListagemClientes(empresa.getClientes)
                    listagemCliente.listar()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoCliente}) não entendida :c`)
            }
            break

        case 2:
            console.log(`\n Produtos: `)
            console.log('1 - Cadastrar')
            console.log('2 - Atualizar')
            console.log('3 - Excluir')
            console.log('4 - Listar todos os Clientes')
            console.log('0 - Voltar ao Menu\n')

            let opcaoProduto = entrada.receberNumero('Escolha uma opção: ')

            switch (opcaoProduto) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break
                case 2:
                    let atualizarProduto = new AtualizacaoProdutos(empresa.getProdutos)
                    atualizarProduto.atualizar()
                    break
                case 3:
                    let exclusaoProduto = new ExclusaoProduto(empresa.getProdutos)
                    exclusaoProduto.excluir()
                    break
                case 4:
                    let listagemProduto = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto.listar()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoProduto}) não entendida :c`)
            }
            break

        case 3:
            console.log(`\n Serviços: `);
            console.log('1 - Cadastrar');
            console.log('2 - Atualizar');
            console.log('3 - Excluir');
            console.log('4 - Listar todos os Serviços');
            console.log('0 - Voltar ao Menu\n');

            let opcaoServico = entrada.receberNumero('Escolha uma opção: ');
            switch (opcaoServico) {
                case 1:
                    new CadastroServico(empresa.getServicos).cadastrar();
                    break;
                case 2:
                    new AtualizacaoServico(empresa.getServicos).atualizar();
                    break;
                case 3:
                    new ExclusaoServico(empresa.getServicos).excluir();
                    break;
                case 4:
                    new ListagemServico(empresa.getServicos).listar();
                    break;
                case 0:
                    break;
                default:
                    console.log(`Opção (${opcaoServico}) não entendida :c`);
            }
            break

        case 4:
            console.log(`\n Listagens: `)
            console.log('1 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade')
            console.log('2 - Listagem de todos os clientes por gênero')
            console.log('3 - Listagem geral dos serviços ou produtos mais consumidos')
            console.log('4 - Listagem dos serviços ou produtos mais consumidos por gênero')
            console.log('5 - Listagem dos 10 clientes que menos consumiram produtos ou serviços')
            console.log('6 - Listagem dos 5 clientes que mais consumiram em valor')
            console.log('0 - Voltar ao Menu\n')

            let opcaoListagem = entrada.receberNumero('Escolha uma opção: ')

            switch (opcaoListagem) {
                case 1:
                    new ListagemMaiorQuantidade(empresa.getClientes).listar()
                    break
                case 2:
                    new ListagemGenero(empresa.getClientes).listar()
                    break
                case 3:
                    new ListagemGeral(empresa.getClientes).listar()
                    break
                case 4:
                    new ListagemClienteGenero(empresa.getClientes).listar()
                    break
                case 5:
                    new ListagemMenorQuantidade(empresa.getClientes).listar()
                    break
                case 6:
                    new ListagemMaiorValor(empresa.getClientes).listar()
                    break
                case 0:
                    break
                default:
                    console.log(`Opção (${opcaoListagem}) não entendida :c`)
            }
            break

        case 0:
            execucao = false;
            console.log("Até mais!");
            console.log("Saindo do sistema...");
            break;

        default:
            console.log(`Opção (${opcao}) não entendida :c`);
    }
}

