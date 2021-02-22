class NegociacaoController{
    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData =  $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._listaNegociacao = new ListaNegociacoes();
        this._NegociacaoView = ProxyFactory.create (
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'], model =>
                this._negociacoesView.update(model)
        );

        new NegociacoesView($('#negociacoesView'))
        this._NegociacaoView.update(this._listaNegociacao)

        
        this._Mensagem = ProxyFactory.create(
            new Mensagem(), ['texto'], model =>
                this._mensagemView.update(model)
        );


        this._MensagemView = new MensagemView($('#mensagemView'))
    }

    adiciona(event){
        event.preventDefault()

        this._listaNegociacao.adiciona(this._criaNegociacao())
       
        this._Mensagem.texto = 'Negociacao adicionada com sucesso'
        
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