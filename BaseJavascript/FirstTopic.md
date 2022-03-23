# O que é JavaScript?
JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional)

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