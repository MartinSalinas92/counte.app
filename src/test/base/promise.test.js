import { getallHerores } from "../../bases/promise";
import heroes from "../../data/heroes";

describe('Pruebas funciones promise', ()=>{

    test('getallHerores debe retornar un heroe', (done) => {

        const idHeroe= 1
            getallHerores(idHeroe)
            .then((heroe) => {

                expect(heroe).toBe(heroes[0])
                done();
                
            })


        
    });

    test('debe retornar un error si no existe el heroe', (done) => {

        const id=10;
            getallHerores(id)
           .catch((err) => {
                
                expect(err).toBe('no se pudo encontrar al heroe')
                done();

            })
        
    })
    

    

})