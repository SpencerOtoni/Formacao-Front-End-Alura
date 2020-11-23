import { Funcinario } from "./Funcionario.js";

export class Diretor extends Funcinario {
    constructor(name, cpf, salario){
        super(name, cpf, salario)
        this._bonificacao = 2
    }
}