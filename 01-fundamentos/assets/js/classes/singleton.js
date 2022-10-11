class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {
        
        
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanter');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);