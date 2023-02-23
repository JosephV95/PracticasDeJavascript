// let num1 = prompt("ingresar número 1");
// let num2 = prompt("ingresar número 2");

// if (num1 > num2) {
//     console.log(`El número 1: ${num1} es mayor que el num2: ${num2}`);
// } else {
//     console.log(`El num2: ${num2} es mayor que el num1 ${num1}`);
// }

// if (num1 !== num2) {
//     console.log("Los números son DIFERENTES");
// } else {
//     console.log("Los números son IGUALES");
// }

// if (num1 > num2) {
//     console.log(`El num1 es mayor que el num2`);
// } else if (num2 > num1) {
//     console.log(`El num2 es mayor que el num1`);
// } else {
//     console.log("Los números son iguales");
// }
//------------------------------

// let num1 = prompt("ingresar número 1");
// let num2 = prompt("ingresar número 2");
// let num3 = prompt("ingresar número 3");

// if (num1<num2 && num1<num3) {
//     console.log(`el n1 ${num1} es menor que n2 ${num2} y n3 ${num3}`);
// } else if (num2<num1 && num2<num3){
//     console.log(`el n2 ${num2} es menor que n1 ${num1} y n3 ${num3}`);
// } else {
//     console.log(`el n3 ${num3} es menor que el n1 ${num1} y n2 ${num2}`);
// }
//----------------------------------------

// let edadHom = prompt("edad del hombre");
// let altHom = prompt("altura del Hombre");

// let Hombre = {
//     nombre: "Joseph",
//     edad : edadHom,
//     altura: altHom
// }
// let edadMuj = prompt("edad de la mujer");
// let altMuj = prompt("altura del mujer");

// let Mujer = {
//     nombre: "Sara",
//     edad : edadMuj,
//     altura: altMuj
// }
// console.table(Hombre);
// console.table(Mujer);

// if(Hombre.edad > Mujer.edad){
//     console.log(`${Hombre.nombre} tiene más edad que ${Mujer.nombre}`);
// } else {
//     console.log(`${Mujer.nombre} tiene más edad que ${Hombre.nombre}`);
// }
// if (Hombre.altura > Mujer.altura){
//     console.log(`${Hombre.nombre} es más alto que ${Mujer.nombre}`);
// } else {
//     console.log(`${Mujer.nombre} es más alta que ${Hombre.nombre}`);
// }
//--------------------------------------------------

// let nombre = prompt("Nombre");
// let edad = prompt("edad");
// let altura = prompt("altura");
// let vision = prompt("vision (1 - 10)");

// if(edad >= 18 && altura >= 150 && (8<= vision&& vision <=10 ) ) {
//     console.log(`${nombre} puede Conducir, cumple los requisitos`);
// } else if (edad < 18){
//     console.log("Le falta edad");
// } else if (altura< 150){
//     console.log("le falta altura");
// } else if (vision < 8 ) {
//     console.log("tiene mala vision");
// }
//-----------------------------

// let nombre = prompt("Nombre");
// let pase = prompt("pase")
// let entrada = confirm("tiene entrada?")

// switch (nombre) {
//     case "Jose":
//         console.log("Pasa gratis por tener el mismo nombre");
//         break;
//     default:
//         console.log("No pasa gratis");
//         break;
// }
// switch (pase) {
//     case "Vip":
//         console.log("pasa gratis por ser VIP");
//         break;

//     default:
//         break;
// }
// if(entrada){
//     usarEntrada = confirm("quiere usa su entrada");
//     if (usarEntrada) {
//         console.log("Bienvenido, uso su entrada");
//     } else {
//         console.log("No uso la entrada, No pasa");
//     }
// } else {
//     console.log("No tiene entrada");
// }

// if (nombre != "Jose" && pase != "Vip" && !entrada) {
//     let comprarEntrada = confirm("Comprar entrada?");
//     if (comprarEntrada) {
//         let saldo = prompt("ingresar dinero")
//         if (saldo >= 1000){
//             console.log("Bienvenido, compro una entrada");
//         } else {
//             console.log("no se realizo la compra, falta dinero");
//         }
//     } else {
//         console.log("No comprara entrada, retirece y deje la fila");
//     }
// }
//--------------------------------------------

// let numIncognita = null;
// let numIngresado = [];
// let agregarNum = null;

// lo hice con un for porque con un if se hace largisimo ( probar si se puede hacer con switch1)
// for (let i = 0; i < 3; i++) {
//   if (!numIngresado.includes("7")) {
//     numIncognita = prompt("Ingrese número:");
//     agregarNum = numIngresado.push(numIncognita);
//     if (numIncognita < "7") {
//       console.log("el numero es menor");
//     } else if (numIncognita > 7) {
//       console.log("el numero es mayor");
//     } else {
//       console.log("GANASTE, ADIVINASTE");
//     }
//   }
// }
// console.log(numIngresado);
//-----------------------------------------
// let edad = prompt("Ingresar su edad");
// if (edad <=12) {
//     console.log("Tu eres un INFANTE");
// } else if (edad <= 18){
//     console.log("Tu eres un ADOLESCENTE");
// } else if (edad <= 45){
//     console.log("Tu eres un MAYOR JOVEN");
// } else if (edad > 45 && edad <100){
//     console.log("Tu eres un ANCIANO");
// } else if (edad >= 100){
//     console.log("SEGURO QUE TIENES ESA EDAD?");
// }
//---------------------------------------
//INGRESAR PIEDRA PAPEL O TIJERAS
// let player1 = prompt("jugador 1:");
// let player2 = prompt("jugador 2:");

// switch (player1) {
//   case "papel":
//   case "piedra":
//   case "tijera":
//     break;

//   default:
//     console.log("el jugador 1 hizo trampa");
//     break;
// }
// switch (player2) {
//   case "papel":
//   case "piedra":
//   case "tijera":
//     break;

//   default:
//     console.log("el jugador 2 hizo trampa");
//     break;
// }

// if (player1 == "papel" && player2 == "piedra") {
//   console.log("Ganó el Jugador 1");
// } else if (player1 == "piedra" && player2 == "tijera") {
//   console.log("Ganó el Jugador 1");
// } else if (player1 == "tijera" && player2 == "papel") {
//   console.log("Ganó el Jugador 1");
// } else if (player1 == player2) {
//   console.log("Empate");
// }

// if (player2 == "papel" && player1 == "piedra") {
//   console.log("Ganó el Jugador 2");
// } else if (player2 == "piedra" && player1 == "tijera") {
//   console.log("Ganó el Jugador 2");
// } else if (player2 == "tijera" && player1 == "papel") {
//   console.log("Ganó el Jugador 2");
// }
//------------------------------------------------------

let color = prompt("Ingresar color:");

switch (color) {
  case "blanco":
  case "negro":
    console.log("Falta de color");
    break;
  case "verde":
    console.log("Color de la naturaleza");
    break;
  case "amarillo":
    console.log("Color del sol");
    break;
  case "azul":
    console.log("Color del agua");
    break;
  case "rojo":
    console.log("Color del fuego");
    break;

  default:
    console.log("Excelente elección, no lo teníamos pensado");
    break;
}
