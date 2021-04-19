import  heroes ,{owers} from "../data/heroes";

//console.log(owers);

export const getHeroes= (id)=>{

    return heroes.find(heroe=>heroe.id ===id)
}

//console.log(getHeroes(2));

//FIn Filters

export const getHeroesbyOwner= (entidad)=>{

    return heroes.filter(heroe=>heroe.owner  ===entidad)
}



//console.log(getHeroesbyOwner('DC'));