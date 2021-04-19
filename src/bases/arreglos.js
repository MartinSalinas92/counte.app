//Arreglos

const arreglos=[1,2,3,4];


let arreglo2=[...arreglos];

arreglo2.push(5);


console.log(arreglos);
console.log(arreglo2);

const arreglo3= arreglo2.map(function(number){

    return number * 2;

});

console.log(arreglo3);