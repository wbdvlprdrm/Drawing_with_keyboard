var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
    };
    
    console.log(teclas);
    
    
    document.addEventListener('keyup', dibujarTeclado);
    var d = document.getElementById('dibujito');
    var ancho = d.width;
    var lienzo = d.getContext('2d');
    
    
    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();  
    lienzo.closePath();
    }

    function dibujarTeclado(evento) 
    {
    
      switch(evento.keyCode) {
        case teclas.DOWN:
        console.log('abajo')
        break;
        case teclas.UP:
        console.log('arriba')
        break;
        case teclas.LEFT:
        console.log('izquierda');
        break;
        case teclas.RIGHT:
        console.log('derecha');
        break;
    
      }
    }
    
    