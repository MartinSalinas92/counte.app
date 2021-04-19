//Objetos Iliterales

const personas={

    nombre: "Tony",
    apellido: "Star",
    edad: 45,
    direccion:{

        ciudad: "NEW YORK",
        zip:55321667,
        lat:14.3232,
        lng:34.92331554
    }
}


//Creo otro objeto con los mismos atributos con diferentes nombres

const personas2={...personas}

personas2.nombre="Ramiro";
personas2.apellido="Gonzales";

console.log(personas, personas2);




