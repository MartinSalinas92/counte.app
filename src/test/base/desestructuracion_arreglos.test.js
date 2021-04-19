import { retornaArreglo } from "../../bases/desestructuracion_arreglos"

describe('Pruebas, arreglos.js', ()=>{

    test('test de deestructuracion', () => {

       const [letras, numeros]= retornaArreglo();

       expect(letras).toBe('ABC')
       expect(typeof letras).toBe('string');

       expect(numeros).toBe(123)
       expect(typeof numeros).toBe('number');
        
    })
    
})