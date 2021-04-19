//Promise

import {getHeroes} from '../bases/import-export';

/*

const promise= new Promise((resolve,reject)=>{

    setTimeout(() => {

        const Heroes=getHeroes(2);

        //EL resolve manda los datos de dicha varible al then que esta abajo
       // resolve(Heroes);

        //reject manda al catch
        reject('No se pudo encontrar el heroe');

        
    },3000 );

});
  

promise.then((heroes)=>{

    console.log('el heroe es',heroes);
})
.catch((error)=>{ 
    console.warn(error);
})*/

export const getallHerores= (id)=>{

    return new Promise((resolve, reject) =>{

        setTimeout(() => {

            const heroes= getHeroes(id);

            if(heroes !=null){

                resolve(heroes)
            }else{
                reject('no se pudo encontrar al heroe')
            }
            
        }, 3000);
    })


}

/*getallHerores(10)
.then((heroes)=>{

    console.log(heroes)
})
.catch((error)=>{
    console.warn(error);
})*/



