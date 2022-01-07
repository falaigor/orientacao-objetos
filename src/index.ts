import { ContatoJsonDAO } from "./model/dao/ContatoJsonDAO";

const contatoDAO = new ContatoJsonDAO();
console.log(contatoDAO.recuperaContatos());
