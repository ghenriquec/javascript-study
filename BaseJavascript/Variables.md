# Tipos de Variaveis, Tipos de Dados e Atribuição de valores
## Var
O escopo é global quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.

var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

Exemplo: 
 var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
  Aqui, greeter tem um escopo global, pois existe fora de uma função, enquanto hello tem escopo de função. Por isso, não podemos acessar a variável hello fora de uma função. Assim, se fizermos isso:

    var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // erro: hello não está definido

Teremos um erro resultante do fato de hello não estar disponível fora da função.
Variáveis de var podem ser declaradas de novo e atualizadas

Isso significa que é possível fazer o seguinte dentro do mesmo escopo e não gerar um erro:

    var greeter = "hey hi";
    var greeter = "say Hello instead";

Ou isso:

    var greeter = "hey hi";
    greeter = "say Hello instead";

Hoisting de var

Hoisting é um mecanismo do JavaScript que faz com que as declarações de variáveis e de funções sejam movidas para o topo de seu escopo antes da execução do código. Portanto, se fizermos isso:

    console.log (greeter);
    var greeter = "say hello"

A interpretação será:

    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"

Desse modo, variáveis de var sofrem o hoisting e vão para o topo do escopo, sendo inicializadas com um valor de undefined.
Problema com var

Há um ponto fraco no uso de var. Usarei o exemplo abaixo para explicar:

    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // o resultado será "say Hello instead"

Assim, já que times > 3 retorna true, greeter é redefinido como "say Hello instead". Embora isso não seja um problema se você quer, conscientemente, que greeter possa ser redefinido, passará a ser um problema quando você não perceber que uma variável greeter já havia sido definida antes.

Se você já usou greeter em outras partes do seu código, pode se surpreender com o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. É por isso que let e const são necessários.

## Let 
let é, agora, a forma preferida de declaração de variáveis. Não é uma surpresa, já que ele é uma melhoria às declarações com var. Ele também resolve o problema de var do qual acabamos de tratar. Vamos ver a razão disso.
let tem escopo de bloco

Um bloco é uma porção de código cercado por {}. Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.

Assim, uma variável declarada com let em um bloco estará disponível apenas dentro daquele bloco. Vamos explicar isso com um exemplo:

   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// dirá "say Hello instead"
    }
   console.log(hello) // hello não está definido

Vemos que o uso de hello fora de seu bloco (as chaves dentro das quais a variável foi definida) retorna um erro. Isso ocorre porque as variáveis de let têm escopo de bloco.
let pode ser atualizado, mas não declarado novamente.

Assim como var,  uma variável declarada com let pode ser atualizada dentro de seu escopo. Diferente de var, no entanto, uma variável let não pode ser declarada novamente dentro de seu escopo. O código a seguir funciona:

    let greeting = "say Hi";
    greeting = "say Hello instead";

Este outro código, no entanto, retornará um erro:

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // erro: identificador 'greeting' já foi declarado

Porém, se a mesma variável for definida em escopos diferentes, não haverá erro:

    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // retornará "say Hello instead"
    }
    console.log(greeting); // retornará "say Hi"

Por que isso não retorna um erro? Porque as duas instâncias são tratadas como variáveis diferentes, já que são de escopos diferentes.

Este fato torna o let uma escolha melhor do que var. Ao usar let, você não precisa se preocupar se usou o nome para uma variável antes, já que a variável existe somente dentro daquele escopo.

Além disso, como uma variável não pode ser declarada mais de uma vez dentro de um escopo, o problema que ocorre com var  que discutimos antes não acontece.
Hoisting de let

Assim como as declarações com var, as feitas com let também sofrem o hoisting para o topo. Diferentemente de var, porém, que é inicializado como undefined, a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável let antes de sua declaração, terá um Reference Error.

## Const
Variáveis declaradas com const mantêm valores constantes. Declarações com const compartilham algumas semelhanças com as declarações com let.
Declarações com const têm escopo de bloco

Like let declarations, const declarations can only be accessed within the block they were declared.
const não pode ser atualizado nem declarado novamente

Isso significa que o valor de uma variável declarada com const se mantém o mesmo dentro do escopo. Ela não pode ser atualizada nem declarada novamente. Desse modo, se declararmos uma variável com const, isso não será possível:

    const greeting = "say Hi";
    greeting = "say Hello instead";// erro: atribuição a uma variável constante. 

O código abaixo também não:

    const greeting = "say Hi";
    const greeting = "say Hello instead";// erro: identificador 'greeting' já foi declarado

Cada declaração com const, portanto, deve ser inicializada no momento da declaração.

Esse comportamento é bastante diferente quando falamos de objetos declarados com const. Embora um objeto declarado com const não possa ser atualizado, é possível atualizar as propriedades desse objeto. Assim, podemos declarar um objeto com const dessa forma:

    const greeting = {
        message: "say Hi",
        times: 4
    }

Não será possível fazer isso:

    greeting = {
        words: "Hello",
        number: "five"
    } // erro:  atribuição a uma variável constante.

Será possível, contudo, fazer isso:

    greeting.message = "say Hello instead";

Isso atualizará o valor de greeting.message sem retornar erros.
Hoisting de const

Assim como as declarações de let, as de const sofrem o hoisting para o topo do escopo, mas não são inicializadas.

Bem, caso você não tenha visto as diferenças, aqui estão:

    As declarações de var tem escopo global ou de função, enquanto as declarações de let e de const têm escopo de bloco.
    Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente. As variáveis de const não podem ser atualizadas nem declaradas novamente.
    Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com var são inicializadas com undefined, as variáveis com let e const não são inicializadas.
    Enquanto var e let podem ser declaradas sem ser inicializadas, const precisa da inicialização durante a declaração.