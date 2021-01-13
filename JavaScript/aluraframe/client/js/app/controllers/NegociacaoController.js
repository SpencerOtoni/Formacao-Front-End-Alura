class NegociacaoController{
    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData =  $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacao = new ListaNegociacoes();
        this._NegociacaoView = new NegociacoesView($('#negociacoesView'))

        this._NegociacaoView.update(this._listaNegociacao)
    }

    adiciona(event){
        event.preventDefault()

        this._listaNegociacao.adiciona(this._criaNegociacao())
        this._NegociacaoView.update(this._listaNegociacao)
        this._limpaFormulario()    
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario(){
        this._inputData.value =  '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus()
    }

    /* let diaMesAno = DateHelper.dataParaTexto(negociacao.data)
    console.log(negociacao.data, diaMesAno) */
}