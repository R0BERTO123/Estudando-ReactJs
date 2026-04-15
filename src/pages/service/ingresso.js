
export default function CalcularValorIngresso(qtd,meia,cupom){
    let totalIngresso = 0

    if(meia === true){
     totalIngresso =  qtd* 15.00
    }
    else{
     totalIngresso = qtd *30.00
    }
    if(cupom ==="QUERO50"){
     totalIngresso = totalIngresso*50/100
    }

    return totalIngresso
}