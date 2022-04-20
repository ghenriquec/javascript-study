# For
A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

A estrutura de repetição for tem a seguinte sintaxe:

```js 
for (inicialização de uma variável; condição de continuação para o loop; expressão final) {
  // ...
} 

for (var x = 0; x < 10; x++) {
  console.log(x);
}
```

# Exemplos de controles de fluxo
Break - para a execuçao do loop
Continue - pula a execução do loop

```js
// Exemplo 1
for (var x = 0; x < 10; x++) {
  if(x === 5) {
    break;
  }else{
    continue;
  }
  console.log(x)
}
  ```
  ```js
// Exemplo 2

let name = 'Guilherme'
let names = ['Joao', 'Maria', 'Pedro']

for (let name of names) {
  console.log(name)
}
