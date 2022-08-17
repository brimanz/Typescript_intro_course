interface SuperHeroe{
    nombre: String;
    edad: number;
    direccion: Direccion,  
    mostrarDireccion:() =>{}
}

interface Direccion{
    calle: String,
    pais: String,
    ciudad: String
}


const superHeroe:SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Main ST",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion(){
        return this.nombre + ', ' +  this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccion = superHeroe.mostrarDireccion();
console.log(direccion); 