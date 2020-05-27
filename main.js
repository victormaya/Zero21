var primeiraCarta = [8, 9, 10, 11, 12]
var randomPrimeira = Math.floor(Math.random() * (5));
var valorAtual = primeiraCarta[randomPrimeira]
var cartaAtual = document.getElementById('cartaatual')
var carta1= document.getElementById('carta1')
var carta2= document.getElementById('carta2')
var carta3 = document.getElementById('carta3')
var carta4 = document.getElementById('carta4')


function inicio(){
    var resultado = document.getElementById('resultado')
    valorCarta1 = c1()
    valorCarta2 = c2()
    valorCarta3 = c3()
    valorCarta4 = c4()
    gerarCarta(valorAtual, valorCarta1, valorCarta2, valorCarta3, valorCarta4)
}
function c1(){
    var cartas=[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var random = Math.floor(Math.random() * (20));
    var valorCarta1 = cartas[random]
    return valorCarta1
}
function c2(){
    var cartas=[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var random= Math.floor(Math.random() * (20));
    var valorCarta2 = cartas[random]
    return valorCarta2
}
function c3(){
    var cartas=[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var random= Math.floor(Math.random() * (20));
    var valorCarta3 = cartas[random]
    return valorCarta3
}
function c4(){
    var cartas=[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var random= Math.floor(Math.random() * (20));
    var valorCarta4 = cartas[random]
    return valorCarta4
}
//continuar daqui
function gerarCarta(valorAtual, valorCarta1, valorCarta2, valorCarta3, valorCarta4){
    switch(valorAtual!=22){
        case valorAtual==valorAtual:
            if (valorAtual<0){
                cartaAtual.src = `cartas/_0.jpg`
            }else if(valorAtual>21){
                cartaAtual.src = `cartas/_21.jpg`
            }else{
            cartaAtual.src = `cartas/_${valorAtual}.jpg`
            }
            break;
        }
    

    switch(valorCarta1!=22){
        case valorCarta1==valorCarta1:
            carta1.src = `cartas/${valorCarta1}.jpg`
            break;
    }
    switch(valorCarta2!=22){
        case valorCarta2==valorCarta2:
            carta2.src = `cartas/${valorCarta2}.jpg`
            break;
    }
    switch(valorCarta3!=22){
        case valorCarta3==valorCarta3:
            carta3.src = `cartas/${valorCarta3}.jpg`
            break;
    }
    switch(valorCarta4!=22){
        case valorCarta4==valorCarta4:
            carta4.src = `cartas/${valorCarta4}.jpg`
            break;
    }
    if (valorAtual<=1 || valorAtual>=20)  {
        document.getElementById("cartaatual").style.boxShadow = "3px 3px 3px rgba(255, 0, 0, .7)";
    }else{
        document.getElementById("cartaatual").style.boxShadow = "3px 3px 3px rgba(0, 0, 0, .7)";
    }
    console.log('c1: '+ valorCarta1)
    console.log('c2: '+ valorCarta2)
    console.log('c3: '+ valorCarta3)
    console.log('c4: '+ valorCarta4)
    console.log('atual: ' + valorAtual)
}

function clica1(){
    valorAtual = valorAtual + valorCarta1;
    valorCarta1 = c1()
    gerarCarta(valorAtual, valorCarta1, valorCarta2, valorCarta3, valorCarta4)
}

function clica2(){
    valorAtual = valorAtual + valorCarta2;
    valorCarta2 = c2()
    gerarCarta(valorAtual, valorCarta1, valorCarta2, valorCarta3, valorCarta4)
}
function clica3(){
    valorAtual = valorAtual + valorCarta3;
    valorCarta3 = c3()
    gerarCarta(valorAtual, valorCarta1, valorCarta2, valorCarta3, valorCarta4)
}
function clica4(){
    valorAtual = valorAtual + valorCarta4;
    valorCarta4 = c4()
    gerarCarta(valorAtual, valorCarta1, valorCarta2,valorCarta3, valorCarta4)
}

inicio();