export class Funcinario{
    constructor(name, cpf, salario){
        this._name = name
        this._cpf = cpf
        this._salario = salario
        this._bonificacao = 1
        this._senha
    }

    autenticar(senha){
        return senha == this._senha
    }

    cadastrarSenha(senha){
        this._senha = senha
    }
}