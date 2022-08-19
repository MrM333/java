'use strict';
/**
 * 
 * 
 * 
 
var var1 = 23; //ambito global corresponde al codigo general. 
let var2 = 12; //ambito local no puede afectar lo que esta fuera del codigo de bloque 
const IVA_1 = 19;
 var var1 = "Hola mundo"; 
 // let var2 = 23; 
 console.log(var1);
 if(true){
    var var1 = false;
 }
 console.log(var1); //No usar var, Usar let. 
//Suma de dos números 
*/
let numero1 = 56;
let numero2 = 55;
let suma;
suma=0;
alert("kdjflkgjdlkj");
 numero1= parseFloat(prompt("Introduzca un número")); //cambiar la cadena a número
 numero2=prompt("Introduzca un número");
 suma= numero1 + parseFloat (numero2);
 console.info("La suma es:"+suma); 
 alert("la suma es" +suma);