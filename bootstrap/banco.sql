drop schema bancoautweb;
create schema bancoautweb;

use bancoautweb;

create table Avaliacao(
    rate char(1),
    jogo varchar(50),
    cod int not null auto_increment,
    primary key (cod) 
)auto_increment = 1000;

delimiter |
create procedure inserirAvaliacao(in avaliacao char(1), in game varchar(50))
begin
	insert into Avaliacao (rate, jogo) values (avaliacao, game);
end;|