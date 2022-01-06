import { Contato } from "../Contato";

describe("Contato", () => {
  it("should created new contact object with atributes valides", () => {
    const contato = new Contato(
      "Igor Santos",
      "+55 (19) 9999-9999",
      "falaigors@gmail.com",
      new Date("1994-8-15")
    );

    expect(contato.nome).toBe("Igor Santos");
    expect(contato.telefone).toBe("+55 (19) 9999-9999");
    expect(contato.email).toBe("falaigors@gmail.com");
    expect(contato.dataNascimento).toStrictEqual(new Date("1994-8-15"));
  });
});
