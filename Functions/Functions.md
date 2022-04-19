# O Que são functions?
Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à ser executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

```javascript
function soma(a, b) {
    return a + b;
}
soma();
```

# Function Scope

```javascript
let subject = 'JavaScript';

function createThink(subject) {
    return subject;
}

console.log(createThink(subject));
```

# Function Hoisting
O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

Sofre hoisting
```javascript

sayHello();
function sayHello() {
    console.log('Hello');
}
``` 
Não sofre hoisting pois é uma função anoniima.

```javascript
var sayHello = function() {
    console.log('Hello');
}
```

# Arrow Function
```javascript
const sayMyName = (name) => {
    console.log(name);
}

sayHello('Guilherme');
```

# Callback Functions

```javascript
const sayMyName = (name) => {
    console.log('Antes de executar a função, executa o código abaixo.');
    name()
    console.log('Depois de executar a callback function');
}

sayMyName(
    () => {
        console.log('Hello' + name);
    }
);
```

# Constructor Function
Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

```javascript
function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando"
	}
}
const mayk = new Person("Guilherme")
const joao = new Person("Henrique")
```
