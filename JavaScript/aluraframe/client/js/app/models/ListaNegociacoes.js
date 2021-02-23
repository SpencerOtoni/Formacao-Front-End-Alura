class ListaNegociacoes {
    
    constructor(updateView) {
        
        this._negociacoes = [];
        this.updateView = updateView
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        this.updateView(this)
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    deleta()  {

        this._negociacoes = [];
        this.updateView(this)
    }
}