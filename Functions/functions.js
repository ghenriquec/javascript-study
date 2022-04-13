// function createPhrases(){
//   console.log("Eu");
//   console.log("sou");
//   console.log("muito");
//   console.log("lindo");
// }

// createPhrases();

// console.log('Fim do Programa')

// const sum = function(a, b){
//   return console.log(a + b);
// }

// sum(2, 3);

//Function Scope
let subject = 'JavaScript';

//o subject so vai ser sobrescrito quando a funçao estiver recebendo o parametro.
function createThink(subject) {
  subject = 'Python';
  return subject;  
}

console.log(createThink(subject));
console.log(subject);