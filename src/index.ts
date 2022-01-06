import { ContaBancaria } from "./models/ContaBancaria";

const conta1 = new ContaBancaria("12345-6", "1234-5");
conta1.depositar(50);
conta1.sacar(20);
console.log(conta1);
