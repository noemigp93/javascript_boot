
/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/


let texto = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';


function encontrarPalabra(texto){

    let contarPalabra = texto.match(/estudiante/gi).length;
    console.log("La palabra estudiante aparece " +  contarPalabra + " veces");
    console.log(contarPalabra);
    
    let nuevoTexto = texto.replaceAll('estudiante', 'koder');
    console.log(nuevoTexto);

}

encontrarPalabra(texto);

// numeroVocales(nombreUsuario);
// function numeroVocales(nombreUsuario){
    
//     console.log();
//     console.log("tu nombre tiene " + nombreUsuario.match(/[aeiou]/gi).length + " vocales");
    
// }




/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/


let cadena1 = 'string 1';
let cadena2 = 'Some large string';

function compararCadenas(cadena1, cadena2 ){
    let tamanioCadena1 = cadena1.length; //4
    let tamanioCadena2 = cadena2.length;//12

    if (tamanioCadena1 > tamanioCadena2){     
        console.log("el string " + cadena1 + " es el más largo");
    } else {       
        console.log("La palabra mas larga es: " + cadena2 + " es el más largo");
    }
}

compararCadenas(cadena1,cadena2);


/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

let frase = 'Programación LenguajeJavascript';


function compararPalabras(frase){ 
    //Dividr las dos palabras de la frase.  
    const myArray = frase.split(" ");
    //['programacion', 'javascript']   

    //Acceder a cada palabra del arreglo, de acuerdo a posicion
    const palabra1 = myArray[0].length;//12
    const palabra2 = myArray[1].length;//10
    
    if (palabra1 > palabra2){
            console.log(myArray[0]);
    } else {
        console.log(myArray[1]);
    }
}

compararPalabras(frase);


/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

let mensaje = prompt('Escribe la operacion que deseas realizar(suma,resta,multiplicacion, division): ');
operacionesBasicas(mensaje);

function operacionesBasicas(operacion){
    console.log(operacion);
    let num1=10;
    let num2=20;
    let resultado=0

    switch (operacion) {
        case 'suma':
            resultado=num1+num2;
            console.log(`La ${operacion} de los dos numeros que indicaste es:${resultado}`)
            break;
        case 'resta':
            resultado=num1-num2;
            console.log(`La ${operacion} de los dos numeros que indicaste es:${resultado}`)    
             break;
        case 'multiplicacion':
            resultado=num1*num2;
            console.log(`La ${operacion} de los dos numeros que indicaste es:${resultado}`)
             break;
        case 'division':
            resultado=num1/num2;
            console.log(`La ${operacion} de los dos numeros que indicaste es:${resultado}`)
            break;
        }

}


// switch (instrumento) {
//     case 'bateria': {
//         integrante.instrumento = 'bateria';
//         integrante.nombre = 'baterista';
//         console.log(integrante);
//     }

//     break;


