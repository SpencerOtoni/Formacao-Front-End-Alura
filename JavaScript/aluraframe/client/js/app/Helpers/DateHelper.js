class DateHelper {
    constructor(){
        throw new Error('Esta classe não pode ser instanciada')
    }
    static dataParaTexto(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
    
    static textoParaData(texto) {
        return new Date(...
            texto.split('-')
            .map((value,indice)=>{
                if(indice == 1){
                    return value - 1
                }
                return value 
            }) 
        ) // this.inputData.value.replace(/-/g, ',')
    }
}