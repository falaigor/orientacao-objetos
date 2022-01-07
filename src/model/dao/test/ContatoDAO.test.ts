import { ContatoJsonDAO } from "../ContatoJsonDAO";
import { IContatoDAO } from "../IContatoDAO";

describe("Contacts DAOs", () => {
  it("should recover all contacts from the repositorio JSON", () => {
    let contatoDAO: IContatoDAO = new ContatoJsonDAO();
    let contatos = contatoDAO.recuperaContatos();

    expect(contatos.length).toBe(100);
  });
});
