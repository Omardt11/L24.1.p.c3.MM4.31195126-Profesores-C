/*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F 
- M). 
Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
promueva a la siguiente categoría a los profesores de un sexo dado, considerando que los 
profesores titulares ya no se pueden promover. 

Función: promoverProfesoresDeSexo. 
Parámetros: profesores (array de objetos profesor), sexo (una letra). 
Retorno: el arreglo de todos los profesores con las modificaciones realizadas. 
Condiciones: sólo se promueven los profesores del sexo dado y que sean “promovibles” */

let promoverProfesoresDeSexo = (profesores, sexo) => {
    profesores.forEach((profesores) => {
     if(profesores.sexo == sexo)
        if(profesores.categoria !== 5)
            profesores.categoria = (profesores.categoria + 1);    
    });
    return profesores;
}
let profesores = [
    {categoria: 1, nombre: "Felix", sexo: "M"},
    {categoria: 5, nombre: "Maria", sexo: "F"},
    {categoria: 3, nombre: "Antonio", sexo: "M"},
    {categoria: 4, nombre: "Ana", sexo: "F"},
    {categoria: 2, nombre: "Jose", sexo: "M"},
    {categoria: 2, nombre: "Alicia", sexo: "F"},
    {categoria: 5, nombre: "Jorge", sexo: "M"},
]

let salida = document.getElementById("salida");

let sexo = prompt("indique el sexo a promover (M - F)")
salida.innerHTML = JSON.stringify(promoverProfesoresDeSexo(profesores, sexo));