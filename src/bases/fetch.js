const api='mg9GWKa55oNqaicmf4JlFZPwnQKNxBjH';

const url= fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api}`);

url
    .then(res=> res.json())

    .then(({data})=>{

        const {url}=data.images.original;

        //console.log(url);

        //creamos una imagen en el index
        const img= document.createElement('img');

        img.src=url;

        document.body.append(img);
    })
    .catch(err=>{
        console.log(err);
    })