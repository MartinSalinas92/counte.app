//Desestructacion de arreglos

const personas= ['goku', 'vegeta', 'Broly'];


//para llegar a un determinado arreglo le agrego una,

const [, ,personaje1]=personas;

//console.log(personaje1);

export const retornaArreglo=()=>{

    return ['ABC', 123];
}

const [, numero]= retornaArreglo();

//console.log(numero);

//Tarea
//1. EL primer valor de arr se llamara nombre
//2. se llamara setNombre

const unreal= (valor)=>{

    return [valor, ()=>{console.log('Hola Mundo')}];

};

    const arr= unreal('Martin');

    //  console.log(arr);


    //resolver tarea

    const [nombre, setContenido]=arr;

    //console.log(nombre);

    setContenido();