show databases; -- visualizar as databases

create database -- criar base de dados

status; -- visualiza base dados

use campeonatobrasileiro; -- entra em uma base de dados

-- cria uma nova tabela
create table estadio(
    id_estadio int primary key auto_increment,
    nome varchar(150) not null,
    endereco varchar(150),
    capacidade int);

show tables; -- mostra as tabelas de uma base de dados

des estadio; -- descreve a estrutura de uma tabela
