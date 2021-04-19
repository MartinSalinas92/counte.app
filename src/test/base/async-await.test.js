import {getImagen} from '../../bases/async-await';

describe('Pruebas con async-await y Fetch', ()=>{

    test('debe retornar la url de la imagen', async() => {

        const url= await getImagen();

        console.log(url);

        expect(url.includes('https://')).toBe(true);
        
    })
    

});