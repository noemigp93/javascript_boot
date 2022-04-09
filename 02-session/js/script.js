console.log("Hola mundo");

//condicionales

// if('b' > 'a'){//compara el numero del codigo ascii de la letra correspondiente
//     console.log("verdadero");
// }else {
//     console.log("falso");
// }

// const nombre = 'noemi';
// if(nombre){
//     console.log('tengo algo');
// }else {
//     console.log('no tengo algo');
// }

// console.log(Boolean([]));



//Ejemplos funsiones constructoras
// Boolean();
// Number();

// let nombre;
// let apellido;
// let segundoApellido;
// if(nombre){
//     console.log("si existe la variable nombre");
// } else if (apellido){
//     console.log("si existe la variable apeliido");
// } else if(segundoApellido){
//     console.log("si existe la variable segundo apeliido");
// }


//Ejercicios


// //Ejercicio 1
//  let letra1 =  prompt('Ingrese una letra');
//  let letra2 =  prompt('Ingrese otra letra');
 
//  letrasAlfabeto(letra1,letra2);
//  function letrasAlfabeto(letra1, letra2){
//          if(letra1 < letra2){
//              console.log("la letra " + letra1 +" aparece antes en el alfabeto");
//          } else {
//              console.log("la letra " + letra2 +" aparece antes en el alfabeto");
//          }
//  }

// //Ejercicio 2
//   const numero1 =  prompt("Ingrese un numero1");
//   const numero2 =  prompt("Ingrese otro numero2");
//   operaciones(numero1,numero2);
//  function operaciones(numero1, numero2){
//      // console.log(numero1);
//      // console.log(numero2);
//      numero1 = Number(numero1);
//      numero2 = Number(numero2);
//      console.log(typeof(numero1));
//      console.log(typeof(numero2));
 
 
//      if (numero1 > numero2){
//          let divison = numero1 / numero2;
//          console.log("El resultado del a division es: " + divison);
//      } else if(numero1 < numero2){
//          let sumar = numero1 + numero2;
//          console.log("El resultado de la suma: " + sumar);
//      } else if (numero1 = numero2){
//          let mutiplicar = numero1 * numero2;
//          console.log("El resultado de la multiplicacion: " + mutiplicar);
//      }
//  }


// //Ejercicio 3
//  const numero =  prompt("Ingrese un numero entre el 1 y el 100");
//  parImpar(numero);
//  function parImpar(numero){
//      numero = Number(numero);
  
//      if (numero%2 == 0){
//          console.log("Es par");
//      }else {
//          console.log("Es impar");
//      }
//  }

// //ejercicio 4

//  const nombre = prompt("Ingresa tu nombre");
//  const pesoEnLaTierra =  prompt("Ingresa tu peso");
//  //pesoPersona(nombre,pesoEnLaTierra);
//  function pesoPersona(nombre, pesoEnLaTierra){
//      peso = Number(pesoEnLaTierra);
//      const gravedad = 9.81;
//      let masa = pesoEnLaTierra / gravedad;
//      const gravedadEnLaLuna = 1.622;
//      let pesoEnLaLuna = masa*gravedadEnLaLuna;
//      console.log("El peso de " + nombre + "en la luna es: " + pesoEnLaLuna);

// //     //Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2
//  }

// pesoPersona2();
// function pesoPersona2(nombre, pesoEnLaTierra){
//     peso = Number(pesoEnLaTierra);
//     const gravedadEnLaLuna = (1.622/(1.622+9.8))*100;
//     console.log(gravedadEnLaLuna);
//     // let gravedad = 9.81;
//     // let masa = pesoEnLaTierra / gravedad;
    
//     // let pesoEnLaLuna = masa*gravedadEnLaLuna;

//     // console.log("El peso de " + nombre + "en la luna es: " + pesoEnLaLuna);
    
//     //Luna = (Peso en la Tierra/9,81m/s2) * 1,622m/s2

// }


let integrante = {}
let instrumento = 'bateria';

switch (instrumento) {
    case 'bateria': {
        integrante.instrumento = 'bateria';
        integrante.nombre = 'baterista';
        console.log(integrante);
    }

    break;
    case 'bateria': {
        integrante.instrumento = 'guitarra';
        integrante.nombre = 'guitarrista';
        console.log(integrante);
    }   
    break;
    case 'trompeta': {
        integrante.instrumento = 'trompeta';
        integrante.nombre = 'trompetista';
        console.log(integrante);
    }
    break;
    default: 
    console.log('yo toco otro instrumento');

}
