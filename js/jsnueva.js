const boton = document.getElementById('botoncito1');
const input  = document.getElementById('cuadrito1');
const marco = document.getElementsByClassName('marco1');
console.log(marco);
boton.setAttribute('value','Cambio texto');
input.setAttribute('value','Que dormidos que estan');

function desabilita(){
    const marco = document.getElementById('h');
    const input =document.getElementById('cuadrito1');
    if(input.disabled){
        input.disabled=document.createElement("input");
        marco.appendChild(nuevoInput);
    }
            else{
input.disabled=true;
            }
        
    }


function clickButton (){
const marco=document.getElementById("h");
console.log("cambiamos de fondo");
console.log(marco);
marco.style.background="black";

   }
