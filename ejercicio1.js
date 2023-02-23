// Ejercicio 1 de Prácticas de Javascript

// let miNombre = prompt("Nombre");
// let miApellido = prompt("Apellido");
// let miEdad = prompt("Edad");
// let miMascota = prompt("Mascota");
// let edadMascota = prompt("EdadMascota");

// let nombreCompleto = `${miNombre} ${miApellido}`;
// let textoPresentacion = `Tengo ${miEdad} años 
// y mi gato se llama ${miMascota} y tiene ${edadMascota} años`;

// let sumaEdades = parseInt(miEdad) + parseInt(edadMascota);
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;

// console.log(nombreCompleto);
// console.log(textoPresentacion);

// console.log(sumaEdades);
// console.log(restaEdades);
// console.log(productoEdades);
// console.log(divisionEdades);

//------------------------------------------------
// let Alumno = {
//     nombre: "Maria",
//     apellido: "Laura",
//     edad: 25,
//     sexo: "mujer",
//     altura: 1.50
// }
// let Mascota = {
//     nombre : "Savage",
//     tipo: "Gato",
//     edadMascota: 4 ,
//     sexo: "macho"
// }

// console.table(Alumno);
// console.log(Alumno.apellido);
// console.log(Alumno.edad);

// console.table(Mascota);

//----------------------
// let frutas = ["Naranja", "Sandía", "Durazno", "Banana", "Melon"]
// let numeros = [28, 38, 44, 15, 12]

// let textoAleatorio = `Ayer comi ${frutas[1]} y tenia ${numeros[3]} semillas`;

// console.log(frutas);
// console.log(frutas[1]);
// console.log(numeros);
// console.log(numeros[3]);
// console.log(textoAleatorio);

//----------------------------------
// let Padre = {
//     nombre: "José",
//     apellido: "Vilte",
//     edad: 31
// }
// let Madre = {
//     nombre: "Laura",
//     apellido: "Mendoza",
//     edad: 22
// }
// let Hija = {
//     nombre: "Ellie",
//     apellido: "Vilte",
//     edad:3
// }
// let familia = [Padre, Madre, Hija];
// console.log(familia);
// console.log(familia[2]);

// if(Padre.edad > Madre.edad){
//     console.log(`${Padre.nombre} es mayor que ${Madre.nombre}`);
// } else if (Padre.edad < Madre.edad){
//     console.log(`${Madre.nombre} es mayor que ${Padre.nombre}`);
// } else {
//     console.log(`${Madre.nombre} y ${Padre.nombre} tiene la misma edad`);
// }

//------------------------------------------------
// let miEdad = prompt("mi edad");
// let suEdad = prompt("su edad");

// let soyMayorEdad = miEdad >= 18 ;
// console.log("Soy mayor de edad: " + soyMayorEdad);
//----------------------

// let edadPers = prompt("edad de la persona: ");
// let alturaPers = prompt("altura de la persona (en cm): ");
// let puedeSubir = (edadPers > 6 && alturaPers > 120);

// if (puedeSubir) {
//     console.log(`Puede subir porque tiene ${edadPers} años y mide ${alturaPers} cm`);
// } else {
//     console.log("No puede subir porque no cumple los requisitos");
// }
//--------------------------

let tipoPase = prompt("Tipo de pase:");
let saldo = prompt("Saldo restante:");
let puedePasar = (tipoPase == "VIP" || saldo > 1000);

if (puedePasar) {
    console.log(`La Persona puede pasar por ser ${tipoPase} y tener saldo de ${saldo}`);
} else {
    console.log("La persona no puede pasar por no cumplir un requisito");
}

