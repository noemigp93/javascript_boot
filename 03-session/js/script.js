// let nombre = 'Noemi';
// let apellido = 'Gutierrez';

// nombre.charAt(1);//Regresa un caracter del string y se le pasa un indice

// console.log(nombre.charAt());

// let char = `${nombre.charAt()}${apellido.charAt()}`;//si respeta los espacios
// console.log(char);


// let nombrecompleto = 'Noemi Gutierrez';
// console.log(nombrecompleto.slice(6,-1));//no respeta las posiciones de la cadena empieza con 1, el -1 empieza a cortar desde atras


//Ejercicio1. Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre 


let nombreUsuario = prompt("Escribe tu nombre: ");

contarCaracteres(nombreUsuario);
function contarCaracteres(nombreUsuario){
    let nombreSinEspacios = nombreUsuario.replace(/ /g, '');
    console.log(nombreSinEspacios);
    
    console.log("Tu nombre tiene: "+ nombreSinEspacios.length + " caracteres");
}

//Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.


function numeroVocales(nombreUsuario){
    
    
}
