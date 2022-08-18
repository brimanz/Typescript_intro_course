import {Producto, calculaISV} from './06-desestructuracion-funcion';


const carritoCompras: Producto[] = [
    {
        desc: "cel 1",
        precio: 100
    },
    {
        desc: "cel 2",
        precio: 200
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log("El ISV es:", isv,);
console.log("El total es:", total);