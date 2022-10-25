// import { init } from "./js/chistes-page";
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from './js/usuarios-page';
// init();
//obtenerUsuarios().then(console.log);

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);
CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Carpintero'
}).then(console.log);

