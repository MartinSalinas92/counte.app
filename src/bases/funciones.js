//Funciones

const saludar2= function(nombre){

    return `Hola mi nombre es ${nombre}`
}


//console.log(saludar2("Martin"));



//Arrow Function
const saludar3= (name)=> `MI nombres es ${name}`;


//console.log(saludar3("Milton"));

const saludar4= ()=> `Hola Mundo`;


//console.log(saludar4());

export const getUser= ()=> (
    {
        name:'martin',
        email:"martinsalinass29@gmail.com"
    }
);

//console.log(getUser());


//Tarea

/*
1.Transformen a una funcion flecha
2. tiene que retornar un objeto implicito
3.Pruebas


*/

export function getUsuarioActivo(nombre){

    return {

        uid:'ABDNls',
        name:nombre
    }
}


//Resuelto

const UsuarioActivo= (nombre)=> (

    {
        uid:'ABDNls',
        name:nombre

    }
);


//console.log(getUsuarioActivo('Fernando'));

//console.log(UsuarioActivo('Juanita'))