create database dbclinica;
use dbclinica;

create table sala(
numero_sala int auto_increment not null unique check(> 1 and < 50),
andar int not null check(< 12)
constraint PK_Sala primary key(numero_sala));

create table medicos(
crm int auto_increment not null,
nome varchar(40) not null,
idade int check(> 23),
especialidade varchar(20) not null default('Ortopedia'),
cpf varchar(15) unique not null,
data_admissao date);

create table pacientes(
cpf varchar(11) auto_increment unique not null,
nome varchar(40) not null
data_nascimento date
cidade varchar(30) default ('Taguatinga'),
doenca varchar(40) not null,
plano_saude varchar(40) not null default ('SUS'),

create table funcionarios(
matricula int unique not null auto_increment,
nome varchar(40) not null,
data_admissao date not null,
cargo varchar(40) not null default (15.510,00));

create table consultas(
codigo_consulta int unique not null auto_increment,
data_horario datetime);


