create table Compromisso
(
    id integer not null primary key autoincrement,
    descricao varchar(300) not null,
    local varchar(100) not null,
    data varchar(12) not null,
    horario varchar(5) not null    
);