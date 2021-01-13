class NegociacoesView {
    constructor(elemento){
        this._elemento = elemento
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map((element)=>{
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(element.data)}</td>
                        <td>${element.quantidade}</td>
                        <td>${element.valor}</td>
                        <td>${element.volume}</td>
                    </tr>
                  `
                })
                }
            </tbody>
                <td colspan="3"></td>
                <td>
                ${  model.negociacoes.reduce((total, element)=>{
                    return total + element.volume
                },0.0)
                
                } 
                </td>
            <tfoot>
            </tfoot>
        </table>
        `
    }

    update(modelListaNegociacoes){
        return this._elemento.innerHTML = this._template(modelListaNegociacoes)
    }
}