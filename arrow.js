//Para este ejercicio te vamos a dar tres funciones ya definidas.Tu trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.

//function dameCinco() {
   // return [1,2,3,4,5];
//}

//function multiplicarPorDos() {
 //return 123 * 2 ;
//}

//function mostrarNombre() {
 // return "Mi nombre es Hernán";
//}

//let dameCinco = array => array;
//console.log(dameCinco(1))

let doble = n1 => n1 *2
let triple = n1 => n1 *3
let apply = (n1,operacion) => operacion(n1)

console.log(apply(2,triple))