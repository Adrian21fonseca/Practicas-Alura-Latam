//DESAFIO

//1) Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 0;
while(contador < 10){

    contador = contador + 1;
    console.log(contador);
};

//2) Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let deBajada = 11;
while(deBajada > 1){
    deBajada = deBajada - 1;
    console.log(deBajada);
}

//3) Crea un programa de cuenta progresiva. 
//   Pide un número y cuenta desde 0 hasta ese número 
//   utilizando un bucle 'while' en la consola del navegador.

let numero = prompt("Ingresa un número:");
numero = parseInt(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    let contador = 0;

    while (contador <= numero) {
        console.log(contador);
        contador++;
    } 
}

