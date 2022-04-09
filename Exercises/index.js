// 1. Declare uma variavel chamada 'Weight'
let weight = 65.0
// console.log(typeof weight)

// 2. Que tipo de Dado é a variavel acima
Number

/* 3. Declare uma variavel e atribua valores para cada um dos dados 
  Name : string 
  age : number
  stars: number 
  isProgrammer: boolean
*/

const student = {
  name: 'Guilherme',
  age: 17,
  weight: 65.0,
  stars: 5.5,
  isProgrammer: true
}

// console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight}kg`)

// 4. Declare uma variavel do tipo array de nome students e atribua a ela nenhum valor.
// let students = [];
// console.log(typeof students)

// 5. Reatribua o valor de students para um array que contenha os valores do object student
students = [  
  student
  ]
// console.log(students)

// 6. coloque no console o valor da posição zero do array acima
// console.log(students[0])

//7. Crie um novo student e adicione ele ao array students

const Guilherme = {
  name: 'Guilherme',
  age: 17,
  weight: 80.0,
  isSubscribed: true
}

students = [
  student,
  Guilherme
]

// console.log(students[1])

// 9. Sem rodar o codigo, qua é a resposta do codigo abaixo e por que?

console.log(a)
var a = 1

/* Ocorre por que a sofre hoisting(elevação), mas o apenas a variavel recebe a elevação, não o valor. */