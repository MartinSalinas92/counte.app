test('deben ser los iguales los string', () => {
    
    //1. Inicializacion

    const mensaje= 'Hola mundo';

    const mensaje2=`Hola mundo`;

    //con el metodo expect sirve para comparar los string

    expect(mensaje).toBe(mensaje2);

})
