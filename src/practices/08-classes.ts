class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}


class Heroe extends PersonaNormal{
    //metodo 1
    /*
    alterEgo:string;
    edad:number;
    nombreReal:number;
    */

    //metodo 2 usando constructor
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
    ){
        //haciendo llamado al super.
        super(nombreReal, "Malibu");
    }
        
}


const ironMan = new Heroe("ironMan", 45, "Tony");
console.log(ironMan);