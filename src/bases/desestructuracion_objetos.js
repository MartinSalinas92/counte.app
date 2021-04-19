//Desestructuracion de Objetos

//Asignacion Desestructurante

const personas={

    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//const {nombre, edad, clave}= personas;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const content= ({nombre, edad, clave})=>{

    //console.log(nombre,edad)

    return {
        nombre:nombre,
        nombreClave: clave

    }
};

const {nombre, nombreClave}= content(personas);

console.log(nombre, nombreClave);










