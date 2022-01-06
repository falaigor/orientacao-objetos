import { validate } from "email-validator";

export class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _dataNascimento: Date;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    dataNascimento: Date
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.dataNascimento = dataNascimento;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome && nome.length > 0) {
      this._nome = nome;
    } else {
      console.log("Nome é invalido");
    }
  }

  get telefone() {
    return this._telefone;
  }

  set telefone(telefone: string) {
    const regex = /^(\+\d{2}.)?(\(\d{2}\)).(\d{5}|\d{4}-\d{4})$/;
    const validadorTelefone = new RegExp(regex);
    if (telefone && validadorTelefone.test(telefone)) {
      this._telefone = telefone;
    } else {
      console.log("Telefone invalido");
    }
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    if (email && validate(email)) {
      this._email = email;
    } else {
      console.log("Email invalido");
    }
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  set dataNascimento(dataNascimento: Date) {
    if (dataNascimento && dataNascimento < new Date()) {
      this._dataNascimento = dataNascimento;
    } else {
      console.log("Data invalido");
    }
  }
}
