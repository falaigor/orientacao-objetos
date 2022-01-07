import { Contato } from "../entity/Contato";

export interface IContatoDAO {
  recuperaContatos(): Contato[];
}
