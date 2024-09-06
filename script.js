function leDoTeclado(evento) {
    

    if(evento.keyCode === cima) {
        sentidoAtual = baixo;
    
    
    
     } else if (evento.keyCode === baixo) {
        sentidoAtual = baixo;



     } else if (evento.keyCode === esquerda) {
        entidoAtual = esquerda;



     } else if (evento.keyCode === direita) {
        sentidoAtual = direita;
     }
}

function deslocarCauda(){


   if (sentidoAtual === direita) {
   uda.unshift([cauda[0][0]+15,cauda[0][1]]);
    cauda.pop();
}
    

if (sentidoAtual === esquerda) {
    uda.unshift([cauda[0][0]-15,cauda[0][1]]);
     cauda.pop();
 }


 if (sentidoAtual === cima) {
    uda.unshift([cauda[0][0],cauda[0][1]-15]);
     cauda.pop();
 }


 if (sentidoAtual === baixo) {
    uda.unshift([cauda[0][0],cauda[0][1]+15]);
     cauda.pop();
 }

}

function desenhaCauda(cauda, raio) {
    for (var i=0; i < cauda.length; i ++) {
        
    }
}






