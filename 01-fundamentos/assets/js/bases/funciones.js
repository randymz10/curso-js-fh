function saludar(nombre) {
    console.log(arguments);
    console.log('Hola  ' + nombre);

    return 1;

    console.log('Soy un código qe está después del return');
}
// Es buena prática que las funciones estén al pricipio

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre)
}


const retornoSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' );
console.log({ retornoSaludar });
saludar2( 'Fernando' );

saludarFlecha();
saludarFlecha2('Melissa');


function suma( a, b ) {
    return a + b;
}

//const sumar2 = (a,b) => {
//    return a + b;
//}

const sumar3 = (a,b) => a + b;

console.log( sumar3(2,2) );

function getAleatorio() {
    return Math.random();
}

// Convertir getAleatorio en una funcion flecha sin llaves

const getAleatorio2 = () => Math.random();



console.log(getAleatorio2());

// console.log( sumar2(1,2) );