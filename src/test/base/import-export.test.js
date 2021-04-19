import { getHeroes, getHeroesbyOwner } from "../../bases/import-export";
import heroes from "../../data/heroes";

describe('Pruebas funciones heroes', () =>{

    test('debe retornas un heroe por id', () => {

        const id= 1;

        const heroe= getHeroes(id);

        const DataHeroe= heroes.find(personaje=>personaje.id ==id );

       

        expect(heroe).toEqual(DataHeroe);
        
    });

    test('debe retornar un undefined si heroe no existe', () => {
        
        const id=10;

        const heroe= getHeroes(id);

        expect(heroe).toBe(undefined);
    });


    //Debe retornar arreglo con los heroes de DC
    //toEqual al arreglo filtrado

    test('debe retornar arreglo con los heroes de DC', () => {

        const owner='DC';

        const heroeDC=getHeroesbyOwner(owner);

        const DataHeroe= heroes.filter(empresa=>empresa.owner ==owner);

        expect(heroeDC).toEqual(DataHeroe);
        

    })
    

    //debe retornar arreglo con los heroes de Marvel
    //length //toBe
    test('deber retornar arreglo con los heroes de Marvel', () => {

        const ownerMarvel= 'Marvel';
        const heroeMarvel=getHeroesbyOwner(ownerMarvel);

        //const DataheroeMarvel=heroes.filter(compañia=>compañia.owner ==ownerMarvel);

        console.log(heroeMarvel);

        expect(heroeMarvel.length).toBe(2);
        
    })
    
    
    

})