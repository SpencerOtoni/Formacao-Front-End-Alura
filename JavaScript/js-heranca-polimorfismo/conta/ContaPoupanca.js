import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, agencia, cliente){
        super(saldoInicial, agencia, cliente)
    }

    sacar(valor){
        let taxa = 1.02
        return this._sacar(valor, taxa)
    }
}