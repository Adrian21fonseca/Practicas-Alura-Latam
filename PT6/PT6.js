//DESAFIO

//1 Crea una función que calcule el índice de masa corporal (IMC) de una persona 
//  a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calculadoraIndiceMasaCorporal(pesoKilogramos, alturaMetros){

    let imc = pesoKilogramos / (alturaMetros ** 2);
    return imc;
}

console.log(calculadoraIndiceMasaCorporal(60 , 1.70 ));


//2 Crea una función que calcule el valor del factorial 
//  de un número pasado como parámetro.

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

console.log(factorial(7));


//3 Crea una función que convierta un valor en dólares, pasado como parámetro, 
//  y devuelva el valor equivalente en reales
//  (moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//  Para esto, considera la cotización del dólar igual a R$4,80.


function dolarReal(dolares){
    let real_A_Dolares = 4.80;
    let valorEnReales = dolares * real_A_Dolares;
    let valorRedondiado = Math.round(valorEnReales * 100) / 100;

    return valorRedondiado;
}
console.log(dolarReal(39.6));

//4 Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//  utilizando la altura y la anchura que se proporcionarán como parámetros.

function calculoDeAreaPerimetro(altura, anchura){
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);

    // Mostrar los resultados en pantalla
    console.log(`Área: ${area} metros cuadrados`);
    console.log(`Perímetro: ${perimetro} metros`);
}

calculoDeAreaPerimetro(18, 7);

//5 Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaPerimetroCircular(radio) {
    // Calcular el área usando la fórmula A = π * r^2
    var area = 3.14 * Math.pow(radio, 2);
    
    // Calcular el perímetro usando la fórmula P = 2 * π * r
    var perimetro = 2 * 3.14 * radio;

    // Mostrar los resultados en la consola
    console.log("Área de la sala circular: " + area);
    console.log("Perímetro de la sala circular: " + perimetro);
}

areaPerimetroCircular(7);

//6 Crea una función que muestre en pantalla la tabla de multiplicar de un 
//  número dado como parámetro.

function tablaDeMultiplicar(num) {
    console.log("Tabla de multiplicar del " + num + ":");

    for (let i = 1; i <= 10; i++) {
        var resultado = num * i;
        console.log(num + " x " + i + " = " + resultado);
    }
}

tablaDeMultiplicar(7);