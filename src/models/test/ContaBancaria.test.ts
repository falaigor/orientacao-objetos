import { ContaBancaria } from "../ContaBancaria";

describe("Conta Bancaria", () => {
  it("should create bank account with number and agency default", () => {
    const conta = new ContaBancaria();

    expect(conta.agencia).toBe("0000-0");
    expect(conta.numero).toBe("00000-0");
  });

  it("should create account bank with number and agency sends", () => {
    const numero = "12345-6";
    const agencia = "1234-5";
    const conta = new ContaBancaria(numero, agencia);

    expect(conta.agencia).toBe(agencia);
    expect(conta.numero).toBe(numero);
  });

  it("the balance of newly created account must be equal 0", () => {
    const conta = new ContaBancaria();
    expect(conta.consultar()).toBe(0);
  });

  it("the balance must be changed correctly afetr making the deposit", () => {
    const conta = new ContaBancaria();
    conta.depositar(25);
    conta.depositar(50);
    conta.depositar(100);

    expect(conta.consultar()).toBe(175);
  });

  it("the balance must be changed correctly afetr making withdrawal is made", () => {
    const conta = new ContaBancaria();
    conta.depositar(500);
    conta.sacar(150.54);

    expect(conta.consultar().toFixed(2)).toBe("349.46");
  });
});
