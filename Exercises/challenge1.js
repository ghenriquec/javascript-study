/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F */

function getScore(score) {
  let a = score >= 90 && score <= 100
  let b = score >= 80 && score <= 89
  let c = score >= 70 && score <= 79
  let d = score >= 60 && score <= 69
  let f = score <= 60 && score >= 0
  let finalScore;

  if(a){
    finalScore = "A"
  }else if(b){
    finalScore = "B"
  }else if(c){
    finalScore = "C"
  }else if(d){
    finalScore = "D"
  }else if(f){
    finalScore = "F"
  }else{
    finalScore = "Nota inválida"  
  }
  return finalScore
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(65))
console.log(getScore(90))
