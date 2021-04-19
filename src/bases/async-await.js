export const getImagen= async()=>{

    try{

        const apiKey='pbVSppZy7ITGJ1zu3k0Y62deBZ9V9Gt3';

        const peticion= await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data}= await peticion.json();
    
        const {url}= data.images.original
    
            //creamos una imagen en el index
           /* const img= document.createElement('img');
    
            img.src=url;
    
            document.body.append(img);*/

        return url

    }catch(error){

        //console.error(error);

        return 'No existe';

    }
   


   

  



}

getImagen();