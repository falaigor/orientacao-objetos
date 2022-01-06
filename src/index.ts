import { ContaBancaria } from "./models/ContaBancaria";

const conta = new ContaBancaria();
conta.depositar(50);
conta.sacar(20);
console.log(conta);
