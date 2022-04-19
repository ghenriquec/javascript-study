# For...of
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
Sintaxe
```js
for (variavel of iteravel) {
  declaração
}
```

variável - A cada iteração, um valor de uma propriedade diferente é atribuido à variável.
iteravel - Objeto cujos atributos serão iterados.

Exemplos
## Iterando sobre um Array
```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```
Ao invés de let, você pode usar const se você não for modificar a variável dentro do bloco.

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```
## Iterando sobre uma String

```js
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

## Iterando sobre uma TypedArray
```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```
## Iterando sobre um Map
```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
## Iterando sobre um Set
```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
## Iterando sobre um objeto arguments
```js
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1,2,3);

// 1
// 2
// 3
```
## Iterando sobre uma coleção do DOM

## Iterar sobre uma coleção do DOM como NodeList: o seguinte exemplo adiciona uma classe read aos parágrafos que são descendentes diretos de uma tag article:
```js
// Nota: Isso irá funcionar somente em plataformas que tem
// suporte ao NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```
## Iterando sobre generators

Você pode também iterar sobre generators:
```js
function* fibonacci() { // uma função geradora (generator)
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // Trunca a sequência em 1000
  if (n >= 1000) {
    break;
  }
}
```
## Não reuse generators

Generators não devem ser re-usados, mesmo se o loop for...of for terminado precocemente, por exemplo através da palavra-chave break. Enquanto em um loop ativo, o generator é fechado e tentar iterar novamente sobre ele não produz (yield) nenhum resultado adicional. O Firefox ainda não implementou este comportamento (o generator pode ser reutilizado, violando o padrão do ES2015 (13.7.5.13, step 5m), mas isso irá mudar uma vez que o bug 1147371 for resolvido.
```js
var gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break;  // Closes iterator
}

// O generator não deve ser reutilizado, o código a seguir não
// faz sentido!
for (let o of gen) {
  console.log(o); // Nunca será chamado.
}
```
## Iterando sobre outros objetos iteráveis

Você pode também iterar sobre um objeto que implementa explicitamente um protocolo iterável protocol:
```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```