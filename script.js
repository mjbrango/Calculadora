let pantalla = document.getElementById("pantalla");
let historial = document.getElementById("historial");

function agregar(valor){
pantalla.value += valor;
}

function limpiar(){
pantalla.value = "";
}

function borrarUno(){
pantalla.value = pantalla.value.slice(0,-1);
}

function porcentaje(){
pantalla.value = eval(pantalla.value) / 100;
}

function calcular(){

try{

let operacion = pantalla.value;
let resultado = eval(operacion);

pantalla.value = resultado;

let item = document.createElement("li");
item.textContent = operacion + " = " + resultado;

historial.appendChild(item);

}catch{

pantalla.value = "Error";

}

}

document.addEventListener("keydown",function(event){

if(!isNaN(event.key) || "+-*/.".includes(event.key)){
pantalla.value += event.key;
}

if(event.key==="Enter"){
calcular();
}

if(event.key==="Backspace"){
pantalla.value = pantalla.value.slice(0,-1);
}

});