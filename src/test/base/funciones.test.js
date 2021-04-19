import { getUser, getUsuarioActivo } from "../../bases/funciones"

describe('Pruebas, funciones.js', ()=>{

    test('getUser debe retonar un objeto', () => {

        const userTest={
                
            name:'martin',
            email:"martinsalinass29@gmail.com"
        }

        const usuario= getUser();

        expect(userTest).toEqual(usuario)
        
    })

    //getUsuarioActivo debe retornar un objeto

    test('debe mandar un parameto la funcion', () => {

        const nombre="Robledo"

        const usuario= getUsuarioActivo(nombre)

        //console.log(usuario);

        expect(usuario).toEqual({

            uid:'ABDNls',
            name:nombre
        })
        
    })
    
    

})