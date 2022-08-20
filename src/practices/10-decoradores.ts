function classDecorator<T extends{new (...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty = "newProperty";
        hello = "hello";
    };
}


@classDecorator
class MiSuperClase{
    public miPropiedad:string = "abs123";

    imprimir(){
        console.log("hola mundo");
    }
}


console.log(MiSuperClase);