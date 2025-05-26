//ejercicio n1//
const numeros = [3, 7, 2, 9, 12, 5, 8];
numeros.forEach(num => {
  if (num > 5) {
    console.log(num);
  }
 });

const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", numerosPares);



//ejercicio n2//
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Lucia", nota: 9 },
  { nombre: "Pedro", nota: 4 }
];


//A//
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:", nombres);


//b//
const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 6);
console.log("Estudiantes aprobados:", aprobados);


//c//

estudiantes.forEach(estudiante => {
  const estado = estudiante.nota >= 6 ? "Aprobado" : "Desaprobado";
  console.log(`${estudiante.nombre}: ${estado}`);
});












