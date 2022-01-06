import { ContaBancaria } from "../ContaBancaria";

describe("Conta Bancaria", () => {
  it("should create account with default values", () => {
    const conta = new ContaBancaria();

    expect(conta.agencia).toBe("0000-0");
    expect(conta.numero).toBe("00000-0");
  });

  it("should created account with values sends user", () => {
    const numero = "01234-5";
    const agencia = "0123-4";
    const conta = new ContaBancaria(numero, agencia);

    expect(conta.agencia).toBe(agencia);
    expect(conta.numero).toBe(numero);
  });

  it("the balance of newly account must equal a 0", () => {
    const conta = new ContaBancaria();

    expect(conta.consultar()).toBe(0);
  });

  it("the balance must be changed correctly after making the deposits", () => {
    const conta = new ContaBancaria();
    conta.depositar(25);
    conta.depositar(50);
    conta.depositar(100);

    expect(conta.consultar()).toBe(175);
  });

  it("the balance must be changed correctly after making the withdrawals", () => {
    const conta = new ContaBancaria();
    conta.depositar(500);
    conta.sacar(150.54);

    expect(conta.consultar().toFixed(2)).toBe("349.46");
  });
});
