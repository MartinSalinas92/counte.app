import { getDatosUser } from "../../bases/template_string";

describe('Pruebas, template_string.js', ()=>{

    test('getSaludo deber retornar un nombre', () => {

        const nombre= "Martin";

       const saludo= getDatosUser(nombre);

       expect(saludo).toBe(` el nombre del usuario es ${nombre}`)
    })

    //si no hay parametros en getDatosUser deber regresar hola carlos

    test('debe regresar el nombre del usuario es Carlos', () => {

        const saludo= getDatosUser();

        expect(saludo).toBe(` el nombre del usuario es Carlos`)
        
    })
    
    

})