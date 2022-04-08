// let frutas = ['manzana', 'sandia', 'melon'];

// let fruta = {
//     nombre: 'limon',
//     color: 'verde'
// };

// fruta.color;
// let arrayLength = frutas.length;

// console.log(frutas[0]);
// console.log(arrayLength);

// function sumar(num1, num2){
//     return num1 + num2;
// };

// let resultado = sumar(1,5);
// console.log(resultado);

// // let num1 = prompt('Ingrese un numero');
// // let num2 = prompt('Ingrese otro numero');
// // console.log(num1 + num2);


// //para concatenar cadenas
// //const name = 'Noemi' + 'Gutierrez';
// const name2 = 'Noemi';
// const fullName = `${name2} es mi nombre`;//template literals, es una forma de concatenar

// console.log(fullName);


// let res= 10;
// ++res;//incremento de +1

// console.log(res);
// let res2 = 10;
//  res2 += 5;//operador de asginacion para aumentar 5
//  res2 -= 10;
//  console.log(res2);


//  //operacdores para 
//  console.log( 10 == '10');//valida el valor
//  console.log( 10 === '10');//valida tambien el tipo de dato

//  console.log( 10 != '10');//valida el valor
//  console.log( 10 !== '10');//valida tambien el tipo de dato


//tarea

 let num1 = prompt('Ingrese un numero');
 let num2 = prompt('Ingrese otro numero');

operaciones(num1, num2);
comparar(num1, num2);

 function operaciones(num1, num2){
    let  toNumber1= Number(num1);
    let toNumber2= Number(num2);

    let sumar = toNumber1 + toNumber2;
    let restar = toNumber1 - toNumber2;
    let multiplicar = toNumber1 * toNumber2;
    let dividir = toNumber1 / toNumber2;

    console.log("La es resultado de la suma es: " + sumar );
    console.log("La es resultado de la resta es: " + restar );
    console.log("La es resultado de la multiplicacion es: " + multiplicar );
    console.log("La es resultado de la division es: " + dividir );
 }


 function comparar(num1, num2){
        if (num1 > num2){
            console.log("El numero " + num1 + " es mayor");
        } else {
            console.log("El numero " + num2 + " es mayor");
        }
 }
