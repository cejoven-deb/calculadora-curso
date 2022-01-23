//* En esta parte se va a manipular el DOM

const botonNumeros = document.getElementsByName('data-number'); //Son arreglos porque me traen un conjunto de botones
const botonOpera = document.getElementsByName('data-opera');// Son arreglos porque me traen un conjunto de botones
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

//* Ahora se hacen los eventos del DOM

// * Se agrega el evento Onclick para traer un metodo

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){  //* se crea el evento del click 
     agregarNumero(boton.innerText); //* El nuemro necesita el metodo agregarNumero, para poderlo agrgar en la 
     //* pantalla de la calculadora

    })

});

botonOpera.forEach(function (boton){
  boton.addEventListener('click', function(){
      selectOperacion(boton.innerText); //* innerText es un evento para recibir texto 
})
});

botonIgual.addEventListener('click', function(){ // También llama al método calcular
   calcular();
   actualizarDisplay();   

});

botonDelete.addEventListener('click', function(){
  clear(); // me borra la pantalla 
  actualizarDisplay();
});

function selectOperacion(ope){ // * llama al metodo calcular 
   if(opeActual === "") return ;
   if (opeAnterior !== ""){
       calcular() // Este es el método
   }
   operacion = ope.toString();
   opeAnterior = opeActual;
   opeActual = "";
}

function calcular(){
   var calculo;
   const anterior = parseFloat(opeAnterior); //* Los valores String que se tienen dentro del parentesis  se 
   // los pone en un par de variables, pero convertidos a números
   const actual = parseFloat(opeActual);
   if (isNaN(anterior) || isNaN(actual)) return ; //isNaN ayuda a ver i los valores son númericos o no
   switch(operacion){ // con switch se selecciona la operaciobn
     case "+":
         calculo = anterior + actual ;
         break;
    case "-":
        calculo = anterior - actual ;
        break;
    case "x":
        calculo = anterior * actual;
        break;
    case "/":
        calculo = anterior / actual;
        break;
    default:
        return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = "";

}
function agregarNumero(num){
   opeActual = opeActual.toString() + num.toString();
  // toString es una función que se aplica a las cadenas de texto para poder capturar el valor en formamto texto
   actualizarDisplay();

}
function clear(){
   opeActual = "";
   opeAnterior = "";
   operacion = undefined; //* Es como i estuvieramon iniializando nuestras variables iniciales


}

function actualizarDisplay(){
    result.value = opeActual;
}
   
clear(); // Delete llama a clear, para que limpie la pantalla y despues llama a actualizarDyspaly();





