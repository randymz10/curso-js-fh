let a = 5;

if ( a >= 10) {
    console.log('A es mayor a 10');
}else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay

console.log( dia );

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1) {
    console.log('Lunes');
} else if ( dia === 2){
    console.log('Martes');
}
else {
    console.log('No es domingo, lunes ni martes');
}

// Sin usar If else, o Switch únicamente objetos
dia = 5; // 0:domingo, 1: lunes...
// dia de la semana


const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const diaObjeto = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}
console.log( diaLetras[dia] || 'Día no es válido');
console.log( diaObjeto[dia] );
