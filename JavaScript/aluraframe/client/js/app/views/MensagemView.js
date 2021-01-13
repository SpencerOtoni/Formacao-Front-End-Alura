class MensagemView extends View {
    constructor(element){
        // this._element = element
        super(element)
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

    /* update(modelMensagem){
        this._element.innerHTML = this._template(modelMensagem)
    } */
}