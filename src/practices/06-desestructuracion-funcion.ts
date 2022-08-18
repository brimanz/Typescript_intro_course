export interface Producto{
    desc:string,
    precio:number
}

const telefono: Producto = {
    desc: "Xiaomi n31",
    precio: 200
}

const laptop: Producto = {
    desc: "dell",
    precio: 400
}


export function calculaISV(productos: Producto[]):[number,number]{
    let total = 0;

    productos.forEach(({precio}) =>{
        total += precio;
    })

    return [total, total * 0.15]; 
}

const articulos = [telefono, laptop];
const [total, isv] = calculaISV(articulos);

console.log("El ISV es:", isv,);
console.log("El total es:", total);