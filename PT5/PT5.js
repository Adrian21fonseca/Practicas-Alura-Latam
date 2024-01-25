//DESAFIO   

//1 Crear una función que muestre "¡Hola, mundo!" en la consola

function saludo() {
    console.log('¡Hola, mundo')
}
saludo()

//2 Crear una función que reciba un nombre como parámetro y muestre 
//  "¡Hola, [nombre]!" en la consola.

function saludame(nombre){
    console.log("¡Hola " + nombre + "!")
}
saludame("adrian")

//3 Crear una función que reciba un número como parámetro 
//  y devuelva el doble de ese número.

    function multiplicadorDeNumeros(numeroDeUsuario){
        console.log(numeroDeUsuario * 2)
    }

    multiplicadorDeNumeros(2)

//4 Crear una función que reciba tres números como parámetros y devuelva su promedio.

    /* 
    
        //opcio 1
    
    function promedios(numeroA, numeroB, numeroC){
        console.log((numeroA % 2), (numeroB % 2), (numeroC % 2));
    }

    promedios(373, 5326, 75317)

    //opcion 2

        function sacarPromedio(num1, num2, num3){
            let suma = num1 + num2 + num3;

            let promedio = suma / 3;

            console.log(promedio)
        

        sacarPromedio(23, 25, 34);
        */

//5 Crear una función que reciba dos números como parámetros 
//  y devuelva el mayor de ellos.

        function mayorMenor(numA, numB){
            let mayor = (numA > numB) ? numA : numB;

            console.log(mayor)
        }

        mayorMenor(12, 4);

        //6 Crear una función que reciba un número como parámetro y devuelva 
        //  el resultado de multiplicar ese número por sí mismo.

            function multiplicarPorSiMismo(numero1){
                console.log(numero1 * numero1 )
            }

            multiplicarPorSiMismo(374)