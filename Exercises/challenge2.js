/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */

let family = {
  incomes: [1400],
  expenses: [400, 500.87, 600, 700, 150.35],
}

let sum = (array) =>{
  let total = 0
  for(let value of array){
    total += value
  }
  return total
}

const calculateFinances = () => {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses
  const itsOK = total >= 0
  let balanceText = "saldo é negativo"

  if(itsOK) {
    balanceText = "saldo é positivo"
  }

  console.log(`Seu ${balanceText} e seu saldo é de R$ ${total.toFixed(2)}`)
}

calculateFinances()