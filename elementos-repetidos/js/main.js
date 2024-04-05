/**
 * encuentra los numeros repetidos de un array
 */

const numbers = [ 1,5,88,1,4,2,5,100,2,2,3,6 ];

const hardResult = [];

for (const num of numbers) {

    //agregamos bandera que indicara si el elemento es nuevo
    let newElement = true;

    //recorremos si el elemento es nuevo
    for (const res of hardResult) {

        //compara si existe
        if( res.element === num ) {
            res.count++;
            newElement = false; //porque no era nuevo
        }        
    }

    if( newElement ) {
        hardResult[hardResult.length] = {
            element: num,
            count : 1
        }
    }
}

console.log( hardResult );