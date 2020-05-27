var valorAtual = Math.floor(Math.random() * 20 + 1)

function escolherCarta(cardNegativo,cardPositivo){
    console.log(cardPositivo)
    console.log(cardNegativo)
    window.alert(`card Atual: ${valorAtual}, card Positivo: ${cardPositivo}, card Negativo: ${cardNegativo}`)
    var escolhido = parseInt(window.prompt('Escolha um dos números acima: '));
    verificador(escolhido,cardNegativo,cardPositivo)
    
}

function verificador(escolhido,cardNegativo,cardPositivo){    
    if(escolhido==cardNegativo){
        valorAtual+=cardNegativo
        cardNegativo = Math.floor(Math.random() * (-10)) - 1;
        analisaCardAtual(valorAtual)
    }else if(escolhido==cardPositivo){
        valorAtual+=cardPositivo
        var cardPositivo = Math.floor(Math.random() * 10) + 1;
        analisaCardAtual(valorAtual)
    }else{
        escolherCarta(cardNegativo,cardPositivo)
    }
    
}

function analisaCardAtual(valorAtual){
    var cardNegativo = Math.floor(Math.random() * (-10)) - 1;
    var cardPositivo = Math.floor(Math.random() * 10) + 1;
    if (valorAtual > 0 && valorAtual<21){
        escolherCarta(cardNegativo,cardPositivo)
    }else{
        console.log('Jogo Finalizado')
    }
}    

analisaCardAtual(valorAtual)