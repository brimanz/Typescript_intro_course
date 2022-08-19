
//se utiliza <T> como estadar para indicar que es un valor generico 
function queTipoSoy<T>(argumentos:T){
    return argumentos;
}


let soyString = queTipoSoy("Hola mundo");
console.log("Aqui es string:", soyString);

let soyNumero = queTipoSoy(100);
console.log("Aqui es numero:", soyNumero);

let soyArreglo = queTipoSoy([0,1,2,3,4,5]);
console.log("Aqui es arreglo:", soyArreglo);