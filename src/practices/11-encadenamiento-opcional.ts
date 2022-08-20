interface Pasajero{
    nombre:string,
    hijos?:string[]
}


const pasajero1:Pasajero = {
    nombre: "Jon"
}


const pasajero2:Pasajero = {
    nombre: "Susan",
    hijos:["Emma", "Sophia"]
}


function mostrarHijos(pasajero: Pasajero):void{

    /*mostrando encadenamiento opcional
    para indicar que pasaje1 no tiene hijos*/
    const numHijos = pasajero.hijos?.length || "No tiene hijos";

    console.log(numHijos);
}


mostrarHijos(pasajero1);