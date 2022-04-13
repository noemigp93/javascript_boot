let personas = [
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',

]



// cicloWhile(5);

function cicloWhile(numero){
    let index = 0;
    while (index < numero){
        
        console.log(index);
        console.log("ciclo activado");
        index++;       
    }
}


// cicloDoWhile();
function cicloDoWhile(){
    let index = 0;

    do{
        console.log(index);
        index++;       
    } while (index < 5);
}



    // for (let index=0; index < personas.length; index++ ){        
    //     console.log(index);
    //     console.log(personas[index]);        
    // }


    //input: kodemia
    //        0123456  
    //output: KoDeMiA


    //posicion par de la cadena string va a cambiar a mayuculas
    //evaluar si el index o posicion es par
    //si es par cambiarlo a mayuculas
    //de lo contrario dejar la letra en minusculas

    let palabra = 'kodemia';
    let arregloPalabra = palabra.split('');


// console.log(convertirPalabra(palabra));
   function convertirPalabra(palabra){

    console.log("entre funsion");
    let nuevaPalara = "" ;
        for (let index=0; index < palabra.length; index++){           
            if(index%2 == 0){
                nuevaPalara += palabra[index].toUpperCase();
            } else {
                nuevaPalara += palabra[index].toLowerCase();
            }            
        }        
        return nuevaPalara;
   }

// Ejercicio 1:
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios,
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: ‘6AQX>H


const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
//console.log(generateRandomString(5));


let numero = prompt("Ingresa el numero de la tabla que deseas visualizar: ");

cadenaAleatoria(numero);
function cadenaAleatoria(numero){
    //base 36 son 0-9, a-z.
    numero = Number(numero);
    console.log(Math.random().toString(36).slice(8) * numero);
    console.log(Math.random().toString(36).slice(8));

}

   //Ejercicios
// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6
    
    
    tablaMultiplicar(numero);
    
    function tablaMultiplicar(numero){      
        numero = Number(numero);

        for (let i=1; i < 11 ; i++){
            //console.log(i);
            console.log(`${numero} x ${i} = ${numero*i}`)
        }
    }
   


