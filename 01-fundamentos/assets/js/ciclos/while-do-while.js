const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/*while( i < carros.length ){
    console.log( carros[i] );
    i++;
    
}*/

// undefine
// null
// false

while( carros[i] ){
    console.log( carros[i] );
    i++;
}


console.warn('Do while');
let j = 0;
do {
    console.log( carros[j] );
    j++
} while ( carros[j] );