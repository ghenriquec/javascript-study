## For..in

O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
Syntax

```js
for (variavel in objeto) {...
}
```

variavel - Uma propriedade diferente do objeto é atribuida em cada iteração.
objeto - Objeto com as propriedades enumeradas.

Descrição

O laço for...in somente iterage sobre propriedades enumeradas. Objetos criados a partir de construtores built-in (arrays e object) herdam propriedades não enumeradas de object.prototype e String.prototype, assim como método String's indexOf() ou Object's toString(). O laço irá iterar sobre todas as propriedades enumeráveis do próprio objeto e somente aquelas enumeráveis herdadas de construtores de objetos prototype.
Propriedades deletadas, adicionadas ou modificadas

O laço for...in iterage sobre as propriedades de um objeto em uma ordem arbitrária (veja o delete (en-US) ). Se uma propriedade é deletada durante a execução do loop, ela se torna indisponível para ser acessada depois. É recomendável não adicionar, remover ou alterar propriedades novas ao objeto durante a execução do laço (durante o loop)
Iteração em Arrays e for...in

### Note

for...in não deve ser usado para iteração em uma Array onde a ordem é importante, visto que ele iterage em uma ordem arbitrária.

Indices de arrays somente se tornam propriedades enumeradas com inteiros (integer). Não há garantia de que utilizando o laço for...in os indices de um array serão retornados em uma ordem particular ou irá retornar todas as propriedades enumeráveis. É recomendável utilizar o laço for com índices numéricos ou Array.prototype.forEach() ou ainda for...of quando iteragir sobre arrays onde a ordem é importante.
Iteração apenas sobre suas próprias propriedades

Se você quer considerar somente as propriedades do próprio objeto e não as herdadas via prototype, use getOwnPropertyNames() ou execute hasOwnProperty() ou (propertyIsEnumerable
Exemplos

A função seguinte toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.

```js
//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
// ctrl+shift+k (para abrir o console no mozilla firefox)
console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

```


A função seguinte ilustra o uso de hasOwnProperty(): as propriedades herdadas não são exibidas.
```js
var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
if( obj.hasOwnProperty( prop ) ) {
console.log("obj." + prop + " = " + obj[prop]);
}
}

// Output:
// "obj.color = red"
```

## Exemplo 1

```js
let person = {
    name: "John",
    age: 30,
    weigth: 88.6
}

for (let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}
```
