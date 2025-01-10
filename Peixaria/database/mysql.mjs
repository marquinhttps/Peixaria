import { Sequelize } from "sequelize";

const conexao = new Sequelize({
database: 'bancoteste',
username: 'root',
password: 'root',
dialect: 'mysql',
});

export default conexao;