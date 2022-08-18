/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    author: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 48,
    cancion: "Somethin about us",
    detalles: {
        author: "Daft punk",
        anio: 2000
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {author} = detalles;

console.log("El volumen es: ", volumen);
console.log("El segundo es: ", segundo);
console.log("La cancion es: ", cancion);
console.log("El author es: ", author );

//segunda parte de la clase
