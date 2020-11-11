import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(saldoInicial, agencia, cliente){
        if(this.constructor == Conta){
            throw new Error('Não instanciar este objeto, pois é classe abstrata!')
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        throw new Error('Método abstrato.')
    }

    _sacar(taxa, valor){
        const valorSacado = taxa * valor
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }

        return 0
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}