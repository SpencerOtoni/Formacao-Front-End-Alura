import { Funcinario } from "./Funcionario.js";

export class Gerente extends Funcinario {
    constructor(name, cpf, salario){
        super(name, cpf, salario)
        this._bonificacao = 1.2
    }
}