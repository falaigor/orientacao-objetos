import { Contato } from "../entity/Contato";
import { ContatoDAO } from "./ContatoDAO";

export class ContatoJsonDAO extends ContatoDAO {
  constructor() {
    super("contatos.json");
  }

  recuperaContatos(): Contato[] {
    const listaObj: any[] = JSON.parse(this.conteudoStr);
    const contatos = listaObj.map(
      (obj) =>
        new Contato(
          obj.nome,
          obj.telefone,
          obj.email,
          new Date(obj.dataNascimento)
        )
    );

    return contatos;
  }
}
