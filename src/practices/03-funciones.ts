//funcion clasica
function sumar(a:number , b:number):number {
    return a + b;
}

console.log("El resultado de suma tracicional es : " + sumar(4, 2));


function multiplicar(num:number, base:number, otroNumero?:number):number{
    return num * base;
}

const resultado = multiplicar(5, 3, 0);
console.log("El resultado de multipicar es: " + resultado);


//funcion flecha

const sumatoria = (a:number, b:number):number =>{
    return a + b;
}

console.log("El resultado de suma flecha es : " + sumatoria(5, 2));

/*---------------------------------------*/

interface PersonajeLOR{
    nombre: String;
    pv: number;
    mostrarHp: () => void;
}


function curar(personaje:PersonajeLOR, curarX):void{
    personaje.pv += curarX; 
}


const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();

