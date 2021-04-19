
const nombre= 'MArtin';
const apellid='SAlinas';

//TEMPLATE STRING

const nombreyapellido=`${nombre} ${apellid}`;

//console.log(nombreyapellido);

export function getDatosUser(nombre = 'Carlos'){

    return ` el nombre del usuario es ${nombre}`;
}

//console.log(getDatosUser(nombreyapellido));


