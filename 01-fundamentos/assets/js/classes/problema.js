const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edada: ${this.edad}`);
    }
}

const Pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edada: ${this.edad}`);
    }
}

// fher.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edada: ${this.edad}`);
    }

}

const maria = new Persona('María', 18);
const melissa = new Persona('Melisa', 35)

// console.log( maria );

maria.imprimir();
melissa.imprimir();