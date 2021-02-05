
const numero1 = 5;
const numero2 = 5;

function sumaNumeros() {

    const resultado = numero1 + numero2;

    console.log("El resultado de " + numero1 + " + " + numero2 + " es: " + resultado);
}


function sumaConParametros(num1, num2) {

    const resultado = num1 + num2;

    console.log(`El resultado de ${num1} + ${num2} es: ${resultado}`);

}

sumaNumeros();
sumaConParametros(15, 15);