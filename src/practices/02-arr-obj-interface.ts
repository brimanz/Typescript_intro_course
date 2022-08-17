let skills:string[] = ['hola', 'adios', 'aqui'];

interface Personaje{
    nombre: string;
    hp: number;
    skills: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    skills: ['hola', 'adios', 'aqui']
}

personaje.puebloNatal = "Pueblo paleta";

console.table(personaje);