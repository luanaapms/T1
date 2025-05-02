import Cliente from "../modelos/cliente";
import Produto from "../modelos/produto";
import Servico from "../modelos/servico";
import RG from "../modelos/rg";
import CPF from "../modelos/cpf";
import Telefone from "../modelos/telefone";
import { Genero } from "../modelos/genero";

export const clientes: Cliente[] = [
    new Cliente("Amanda Ribeiro", "Amanda", Genero.FEMININO, new CPF('321.456.789-00', new Date('2022-04-10')), new RG('12.345.678-9', new Date('2020-03-12')), new Telefone('11', '987654320')),
    new Cliente("Caio Martins", "Caio", Genero.MASCULINO, new CPF('654.987.321-11', new Date('2021-06-20')), new RG('98.765.432-1', new Date('2019-02-11')), new Telefone('21', '912345670')),
    new Cliente("Helena Silva", "Helena", Genero.FEMININO, new CPF('789.123.456-22', new Date('2020-08-05')), new RG('76.543.210-0', new Date('2018-01-10')), new Telefone('31', '934567890')),
    new Cliente("Igor Castro", "Igor", Genero.MASCULINO, new CPF('456.789.123-33', new Date('2019-07-12')), new RG('54.321.098-7', new Date('2017-12-09')), new Telefone('51', '945678900')),
    new Cliente("Melissa Freitas", "Melissa", Genero.FEMININO, new CPF('123.654.987-44', new Date('2018-09-18')), new RG('32.109.876-5', new Date('2016-11-08')), new Telefone('41', '956789010')),
    new Cliente("Bruno Lima", "Bruno", Genero.MASCULINO, new CPF('987.321.654-55', new Date('2017-05-01')), new RG('10.987.654-3', new Date('2015-10-07')), new Telefone('48', '967890120')),
    new Cliente("Paula Mendes", "Paula", Genero.FEMININO, new CPF('234.567.890-66', new Date('2016-11-22')), new RG('23.456.789-1', new Date('2014-09-06')), new Telefone('62', '978901230')),
    new Cliente("Rodrigo Souza", "Rodrigo", Genero.MASCULINO, new CPF('345.678.901-77', new Date('2015-03-15')), new RG('34.567.890-2', new Date('2013-08-05')), new Telefone('65', '989012340')),
    new Cliente("Camila Rocha", "Camila", Genero.FEMININO, new CPF('456.789.012-88', new Date('2014-12-09')), new RG('45.678.901-3', new Date('2012-07-04')), new Telefone('92', '900123450')),
    new Cliente("Vitor Almeida", "Vitor", Genero.MASCULINO, new CPF('567.890.123-99', new Date('2013-06-13')),new RG('56.789.012-4', new Date('2011-06-03')), new Telefone('91', '901234560')),
    new Cliente("Renata Duarte", "Renata", Genero.FEMININO, new CPF('678.901.234-10', new Date('2012-04-17')), new RG('67.890.123-5', new Date('2010-05-02')), new Telefone('85', '912345670')),
    new Cliente("Leonardo Azevedo", "Leo", Genero.MASCULINO, new CPF('789.012.345-21', new Date('2011-01-20')), new RG('78.901.234-6', new Date('2009-04-01')), new Telefone('71', '923456780')),
    new Cliente("Daniela Teixeira", "Dani", Genero.FEMININO, new CPF('890.123.456-32', new Date('2010-05-08')), new RG('89.012.345-7', new Date('2008-03-30')), new Telefone('83', '934567890')),
    new Cliente("Fábio Monteiro", "Fábio", Genero.MASCULINO, new CPF('901.234.567-43', new Date('2009-08-26')), new RG('90.123.456-8', new Date('2007-02-29')), new Telefone('81', '945678900')),
    new Cliente("Raquel Nunes", "Raquel", Genero.FEMININO, new CPF('012.345.678-54', new Date('2008-07-03')), new RG('01.234.567-9', new Date('2006-01-28')), new Telefone('86', '956789010')),
    new Cliente("Hugo Bastos", "Hugo", Genero.MASCULINO, new CPF('123.456.789-65', new Date('2007-09-11')), new RG('12.345.678-0', new Date('2005-12-27')), new Telefone('98', '967890120')),
    new Cliente("Larissa Pacheco", "Larissa", Genero.FEMININO, new CPF('234.567.890-76', new Date('2006-11-19')), new RG('23.456.789-1', new Date('2004-11-26')), new Telefone('82', '978901230')),
    new Cliente("Thiago Rezende", "Thiago", Genero.MASCULINO, new CPF('345.678.901-87', new Date('2005-02-27')), new RG('34.567.890-2', new Date('2003-10-25')), new Telefone('84', '989012340')),
    new Cliente("Viviane Lopes", "Viviane", Genero.FEMININO, new CPF('456.789.012-98', new Date('2004-12-05')), new RG('45.678.901-3', new Date('2002-09-24')), new Telefone('69', '900123450')),
    new Cliente("Carlos Peixoto", "Carlos", Genero.MASCULINO, new CPF('567.890.123-09', new Date('2003-06-14')), new RG('56.789.012-4', new Date('2001-08-23')), new Telefone('95', '901234560')),
    new Cliente("Tatiane Correia", "Tatiane", Genero.FEMININO, new CPF('678.901.234-20', new Date('2002-10-06')), new RG('67.890.123-5', new Date('2000-07-22')), new Telefone('68', '912345670')),
    new Cliente("Mateus Gouveia", "Mateus", Genero.MASCULINO, new CPF('789.012.345-31', new Date('2001-03-13')), new RG('78.901.234-6', new Date('1999-06-21')), new Telefone('63', '923456780')),
    new Cliente("Priscila Vieira", "Priscila", Genero.FEMININO, new CPF('890.123.456-42', new Date('2000-01-07')), new RG('89.012.345-7', new Date('1998-05-20')), new Telefone('61', '934567890')),
    new Cliente("Marcos Henriques", "Marcos", Genero.MASCULINO, new CPF('901.234.567-53', new Date('1999-10-02')), new RG('90.123.456-8', new Date('1997-04-19')), new Telefone('27', '945678900')),
    new Cliente("Sabrina Cavalcanti", "Sabrina", Genero.FEMININO, new CPF('012.345.678-64', new Date('1998-09-21')), new RG('01.234.567-9', new Date('1996-03-18')), new Telefone('31', '956789010')),
    new Cliente("Eduardo Campos", "Eduardo", Genero.MASCULINO, new CPF('123.456.789-75', new Date('1997-06-08')), new RG('12.345.678-0', new Date('1995-02-17')), new Telefone('11', '967890120')),
    new Cliente("Beatriz Fernandes", "Beatriz", Genero.FEMININO, new CPF('234.567.890-86', new Date('1996-07-30')), new RG('23.456.789-1', new Date('1994-01-16')), new Telefone('21', '978901230')),
    new Cliente("Anderson Figueiredo", "Anderson", Genero.MASCULINO, new CPF('345.678.901-97', new Date('1995-05-18')), new RG('34.567.890-2', new Date('1993-12-15')), new Telefone('41', '989012340')),
    new Cliente("Luciana Prado", "Luciana", Genero.FEMININO, new CPF('456.789.012-08', new Date('1994-11-11')), new RG('45.678.901-3', new Date('1992-11-14')), new Telefone('48', '900123450')),
    new Cliente("Renato Moraes", "Renato", Genero.MASCULINO, new CPF('567.890.123-19', new Date('1993-02-09')), new RG('56.789.012-4', new Date('1991-10-13')), new Telefone('71', '901234530'))
];

export const servicos: Servico[] = [
    new Servico("1", "Manicure", 30),
    new Servico("2", "Pedicure", 35),
    new Servico("3", "Design de sobrancelhas", 25),
    new Servico("4", "Pintura de cabelo", 200),
    new Servico("5", "Remoção de rugas", 150),
    new Servico("6", "Remoção de manchas na pele", 200),
    new Servico("7", "Aplicação de Botox", 500),
    new Servico("8", "Tratamento para emagrecimento", 300),
    new Servico("9", "Redução de medidas", 350),
    new Servico("10", "Corte de cabelo masculino", 80),
    new Servico("11", "Modelagem e corte de barba", 50),
    new Servico("12", "Tratamento para quedas de cabelo", 250),
    new Servico("13", "Massagem relaxante", 120),
    new Servico("14", "Limpeza de pele", 90),
    new Servico("15", "Hidratação capilar", 70),
    new Servico("16", "Depilação a laser", 400),
    new Servico("17", "Maquiagem para eventos", 150),
    new Servico("18", "Escova progressiva", 180),
    new Servico("19", "Tratamento de unhas encravadas", 60),
    new Servico("20", "Peeling facial", 220),
];
    
export const produtos: Produto[] = [
        new Produto("1", "Shampoo Profissional Hidratante", 50),
        new Produto("2", "Condicionador Hidratante", 45),
        new Produto("3", "Máscara de Tratamento Capilar", 70),
        new Produto("4", "Tinta para Cabelos", 60),
        new Produto("5", "Pasta Modeladora para Barba e Bigode", 40),
        new Produto("6", "Spray Fixador para Cabelo", 35),
        new Produto("7", "Gel Fixador para Cabelo", 35),
        new Produto("8", "Creme de Barbear", 30),
        new Produto("9", "Loção Pós-Barba", 25),
        new Produto("10", "Pente de Madeira", 20),
        new Produto("11", "Escova Alisadora", 150),
        new Produto("12", "Spray de Fixação", 40),
        new Produto("13", "Shampoo 3 em 1", 35),
        new Produto("14", "Tônico Capilar Antiqueda", 55),
        new Produto("15", "Pomada Modeladora", 45),
        new Produto("16", "Espuma de Barbear", 25),
        new Produto("17", "Kit de Pentes para Corte", 50),
        new Produto("18", "Creme para Pentear", 40),
        new Produto("19", "Máscara de Hidratação Profunda", 80),
        new Produto("20", "Serum Reparador de Pontas", 55),
        new Produto("21", "Protetor Térmico Capilar", 45),
        new Produto("22", "Lâminas de Barbear Descartáveis", 15),
        new Produto("23", "Capa de Corte de Cabelo", 35),
        new Produto("24", "Tesoura de Desbaste", 120),
        new Produto("25", "Kit de Aparador de Pelos", 200),
        new Produto("26", "Creme Hidratante Corporal", 45),  
        new Produto("27", "Desodorante Corporal", 30),  
        new Produto("28", "Perfume Feminino", 150),  
        new Produto("29", "Escova de Cabelos Profissional", 70),  
        new Produto("30", "Kit de Maquiagem", 200)    
];


// Função para adicionar consumos aleatórios de produtos e serviços
function adicionarConsumoAleatorio(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
): void {
    clientes.forEach(cliente => {
        const qtdProdutos = Math.floor(Math.random() * 5) + 1; 
        const qtdServicos = Math.floor(Math.random() * 5) + 1; 
      
        for (let i = 0; i < qtdProdutos; i++) {
            const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)];
            cliente.getProdutosConsumidos.push(produtoAleatorio); 
        }

        
        for (let i = 0; i < qtdServicos; i++) {
            const servicoAleatorio = servicos[Math.floor(Math.random() * servicos.length)];
            cliente.getServicosConsumidos.push(servicoAleatorio); 
        }
    });
}

adicionarConsumoAleatorio(clientes, produtos, servicos);

