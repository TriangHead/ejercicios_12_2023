'use strict'

let lab = 2; 
let filas = 3;
let letra = 65; 

for (let i = 0; i < filas; i++) { 
  let fila = String.fromCharCode(letra); 
  let codigo = "LAB" + lab + "#" + fila; 
  alert(codigo); 
 
  letra++; 
}