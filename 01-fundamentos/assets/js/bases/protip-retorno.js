function crearPersona( nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona ('Fernando', 'Herrera');
console.log( persona );

const crearPersona2 = ( nombre, apellido) => ({nombre, apellido});


function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) =>{
    // console.log({edad, args});
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({argumentos});

const {apellido} = crearPersona('Fernando', 'Heerra');