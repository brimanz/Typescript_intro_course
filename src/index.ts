/*
    ===== Código de TypeScript =====
*/


class Heroe{
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
    ){}
}


const ironMan = new Heroe("ironMan", 45, "Tony");
console.log(ironMan);