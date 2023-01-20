var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var muneco = document.querySelector(".contenedorDeMuneco");
var h3 = document.querySelector(".contenedorDeH3");
var parrafo = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var area=recuperarTexto()
    resultado.textContent = encriptarTexto(area)

}

function desencriptar(){
    ocultarAdelante();
    var area=recuperarTexto()
    resultado.textContent = desencriptarTexto(area)
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    muneco.classList.add("fade-out");
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

    const btnCopiar = document.querySelector('.btnCopiar');
    btnCopiar.addEventListener('click', copy);
    
    function copy(){
      var contenido = document.querySelector(".contenedorResultado").innerText;
      navigator.clipboard.writeText(contenido)
      .then(() => {
        console.log('Contenido copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar contenido al portapapeles: ', err);
      });
    }
    
        
    
}

const btnCopiar = document.querySelector('.btnCopiar');
    btnCopiar.addEventListener('click', copy);

    function copy(){
        var contenido = document.querySelector(".texto-resultado").innerText;
        navigator.clipboard.writeText(contenido)
        .then(() => {
          console.log('Contenido copiado al portapapeles');
        })
        .catch(err => {
          console.error('Error al copiar contenido al portapapeles: ', err);
        });
        window.alert("Su mensaje ha sido copiado");
      }