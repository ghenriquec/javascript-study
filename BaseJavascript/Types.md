## Tipos de Variaveis
O mais recente padrão ECMAScript define sete tipos de dados:

    Seis tipos de dados são os chamados primitivos:
        Boolean. true e false.
        null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null não é o mesmo que Null, NULL, ou ainda outra variação.
        undefined. Uma propriedade superior cujo valor é indefinido.
        Number. 42 ou 3.14159.
        String. "Howdy"
        Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
    e Object

Embora esses tipos de dados sejam uma quantidade relativamente pequena, eles permitem realizar funções úteis em suas aplicações.  Objetos e funções são outros elementos fundamentais na linguagem. Você pode pensar em objetos como recipientes para os valores, e funções como métodos que suas aplicações podem executar.
Conversão de tipos de dados

JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script. Então, por exemplo, você pode definir uma variável da seguinte forma:

var answer = 42;

E depois, você pode atribuir uma string para a mesma variável, por exemplo:

answer = "Obrigado pelos peixes...";

Devido JavaScript ser dinamicamente tipado, essa declaração não gera uma mensagem de erro.

Em expressões envolvendo valores numérico e string com o operador +, JavaScript converte valores numérico para strings. Por exemplo, considere a seguinte declaração:

x = "A resposta é " + 42 // "A resposta é 42"
y = 42 + " é a resposta" // "42 é a resposta"

Nas declarações envolvendo outros operadores,  JavaScript não converte valores numérico para strings. Por exemplo:

"37" - 7 // 30
"37" + 7 // "377"

Convertendo strings para números

No caso de um valor que representa um número está armazenado na memória como uma string, existem métodos para a conversão.

    parseInt()
    parseFloat()

parseInt irá retornar apenas números inteiros, então seu uso é restrito para a casa dos decimais. Além disso, é uma boa prática ao usar parseInt incluir o parâmetro da base. O parâmetro da base é usado para especificar qual sistema númerico deve ser usado.

Uma método alternativo de conversão de um número em forma de string é com o operador + (operador soma):

"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// Nota: Os parênteses foram usados para deixar mais legível o código, ele não é requirido.

Literais

Você usa literais para representar valores em JavaScript. Estes são valores fixados, não variáveis, que você literalmente insere em seu script. Esta seção descreve os seguintes tipos literais:

    Array literal
    Literais boolean
    Literais de ponto flutuante
    Inteiros
    Objeto literal
    String literal

Array literal

Um array literal é uma lista de zero ou mais expressões, onde cada uma delas representam um elemento do array, inseridas entre colchetes ([]). Quando você cria um array usando um array literal, ele é inicializado  com os valores especificados como seus elementos, e seu comprimento é definido com o  número de elementos especificados.

O exemplo a seguir cria um array coffees com três elementos e um comprimento de três:

var coffees = ["French Roast", "Colombian", "Kona"];

Nota : Um array literal é um tipo de inicializador de objetos. Veja Usando inicializadores de Objetos.

Se um array é criado usando um literal no topo do script, JavaScript interpreta o array cada vez que avalia a expressão que contêm o array literal. Além disso, um literal usado em uma função é criado cada vez que a função é chamada.

Array literal são também um array de objetos. Veja  Array e Coleções indexadas para detalhes sobre array de objetos.
Vírgulas extras em array literal

Você não precisa especificar todos os elementos em um array literal. Se você colocar duas vírgulas em uma linha, o array é criado com undefined para os elementos não especificados. O exemplo a seguir cria um array chamado fish:

var fish = ["Lion", , "Angel"];

Esse array tem dois elementos com valores e um elemento vazio (fish[0] é "Lion", fish[1] é undefined, e fish[2] é "Angel" ).

Se você incluir uma vírgula à direita no final da lista dos elementos, a vírgula é ignorada. No exemplo a seguir, o comprimento do array é três. Não há nenhum myList[3]. Todas as outras vírgulas na lista indicam um novo elemento.

Nota : Vírgulas à direita podem criar erros em algumas versões de navegadores web antigos, é recomendável removê-las.

var myList = ['home', , 'school', ];

No exemplo a seguir, o comprimento do array é quatro, e myList[0] e myList[2] são undefined.

var myList = [ , 'home', , 'school'];

No exemplo a seguir, o comprimento do array é quatro, e myList[1] e myList[3] são undefined. Apenas a última vírgula é ignorada.

var myList = ['home', , 'school', , ];

Entender o comportamento de vírgulas extras é importante para a compreensão da linguagem JavaScript, no entanto, quando você escrever seu próprio código: declarar explicitamente os elementos em falta como undefined vai aumentar a clareza do código, e consequentemente na sua manutenção.
Literais Boolean

O tipo Boolean tem dois valores literal: true e false.

Não confunda os valores primitivos Boolean true e false com os valores true e false do objeto Boolean. O objeto Boolean é um invólucro em torno do tipo de dado primitivo. Veja Boolean para mais informação.
Inteiros

Inteiros podem ser expressos em decimal (base 10), hexadecimal (base 16), octal (base 8) e binário (base 2).

    Decimal inteiro literal consiste em uma sequência de dígitos sem um 0 (zero).
    0 (zero) em um inteiro literal indica que ele está em octal. Octal pode incluir somente os dígitos 0-7.
    0x (ou 0X) indica um hexadecimal. Inteiros hexadecimais podem incluir dígitos (0-9) e as letras a-f e A-F.
    0b (ou 0B) indica um binário. Inteiros binário podem incluir apenas os dígitos 0 e 1.

Alguns exemplos de inteiros literal são:

0, 117 and -345 (decimal, base 10)
015, 0001 and -077 (octal, base 8)
0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" or base 16)
0b11, 0b0011 and -0b11 (binário, base 2)

Para maiores informações, veja Literais numérico na referência Léxica.
Literais de ponto flutuante

Um literal de ponto flutuante pode ter as seguintes partes:

    Um inteiro decimal que pode ter sinal (precedido por "+" ou "-"),
    Um ponto decimal ("."),
    Uma fração (outro número decimal),
    Um expoente.

O expoente é um "e" ou "E" seguido por um inteiro, que pode ter sinal (precedido por "+" ou "-"). Um literal de ponto flutuante  deve ter no mínimo um dígito e um ponto decimal ou "e" (ou "E").

Mais sucintamente, a sintaxe é:

[(+|-)][digitos][.digitos][(E|e)[(+|-)]digitos]

Por exemplo:

3.1415926
-.123456789
-3.1E+12
.1e-23

Objeto literal

Um objeto literal é uma lista de zero ou mais pares de nomes de propriedades e valores associados de um objeto, colocado entre chaves ({}). Você não deve usar um objeto literal no início de uma declaração. Isso levará a um erro ou não se comportará conforme o esperado, porque o { será interpretado como início de um bloco.

Segue um exemplo de um objeto literal. O primeiro elemento do objeto carro define uma propriedade, meuCarro, e atribui para ele uma nova string, "Punto"; o segundo elemento, a propriedade getCarro, é imediatamente atribuído o resultado de chamar uma função (tipoCarro("Fiat")); o terceiro elemento, a propriedade especial, usa uma variável existente (vendas).

var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = { meuCarro: "Punto", getCarro: tipoCarro("Fiat"), especial: vendas };

console.log(carro.meuCarro);   // Punto
console.log(carro.getCarro);  // Fiat
console.log(carro.especial); // Toyota

Além disso, você pode usar um literal numérico ou string para o nome de uma propriedade ou aninhar um objeto dentro do outro. O exemplo a seguir usar essas opções.

var carro = { carros: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(carro.carros.b); // Jeep
console.log(carro[7]); // Mazda

Nomes de propriedades de objeto podem ser qualquer string, incluindo uma string vazia. Caso o nome da propriedade não seja um identificador JavaScript ou número, ele deve ser colocado entre aspas. Nomes de propriedades que não possuem identificadores válido, também não podem ser acessadas pela propriedade de ponto (.), mas podem ser acessadas e definidas com a notação do tipo array ("[]").

var unusualPropertyNames = {
  "": "Uma string vazia",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // SyntaxError: string inesperada
console.log(unusualPropertyNames[""]);  // Um string vazia
console.log(unusualPropertyNames.!);    // SyntaxError: símbolo ! inesperado
console.log(unusualPropertyNames["!"]); // Bang!

Observe:

var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a não está definido
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two

 
Expressão Regex Literal

Um regex literal é um padrão entre barras. A seguir um exemplo de regex literal.

var re = /ab+c/;

String Literal

Uma string literal são zero ou mais caracteres dispostos em aspas duplas (") ou aspas simples ('). Uma sequência de caracteres deve ser delimitada por aspas do mesmo tipo; ou seja,  as duas aspas simples ou ambas aspas duplas. A seguir um exemplo de strings literais.

"foo"
'bar'
"1234"
"um linha \n outra linha"
"John's cat"

Você pode chamar qualquer um dos métodos do objeto string em uma string literal - JavaScript automaticamente converte a string literal para um objeto string temporário, chama o método, em seguida, descarta o objeto string temporário. Você também pode usar a propriedade String.length com uma string literal:

console.log("John's cat".length)
// Irá exibir a quantidade de caracteres na string incluindo o espaço em branco.
// Nesse caso, 10 caracteres.

Você deve usar string literal, a não ser que você precise usar um objeto string. Veja String para detalhes sobre objetos de strings.
Uso de caracteres especiais em string

Além dos caracteres comuns, você também pode incluir caracteres especiais em strings, como mostrado no exemplo a seguir.

"uma linha \n outra linha"

A tabela a seguir lista os caracteres especiais que podem ser usados em strings no JavaScript.
Tabela: Caracteres especiais no JavaScript Caracter 	Descrição
\0 	Byte nulo
\b 	Backspace
\f 	Alimentador de formulário
\n 	Nova linha
\r 	Retorno do carro
\t 	Tabulação
\v 	Tabulação vertical
\' 	Apóstrofo ou aspas simples
\" 	Aspas dupla
\\ 	Caractere de barra invertida
\XXX 	

Caractere com a codificação Latin-1 especificada por três dígitos octal XXX entre 0 e 377. Por exemplo, \251 é sequência octal para o símbolo de direitos autorais.
\xXX 	

Caractere com a codificação Latin-1 especificada por dois dígitos hexadecimal XX entre 00 e FF. Por exemplo, \xA9 é a sequência hexadecimal para o símbolo de direitos autorais.
\uXXXX 	

Caractere Unicode especificado por quatro dígitos hexadecimal XXXX. Por exemplo, \u00A9 é a sequência Unicode para o símbolo de direitos autorais. Veja sequências de escape Unicode.
Caracteres de escape

Para caracteres não listados na tabela, se precedidos de barra invertida ela é ignorada, seu uso está absoleto e deve ser ignorado.

Você pode inserir uma aspa dentro de uma string precendendo-a com uma barra invertida. Isso  é conhecido como escaping das aspas. Por exemplo:

var quote = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
console.log(quote);

O resultado disso seria:

Ele lê "The Cremation of Sam McGee" de R.W. Service.

Para incluir uma barra invertida dentro de uma string, você deve escapar o caractere de barra invertida. Por exemplo, para atribuir o caminho do arquivo c:\temp para uma string, utilize o seguinte:

var home = "c:\\temp";

Você também pode escapar quebras de linhas, precedendo-as com barra invertida. A barra invertida e a quebra de linha são ambas removidas da string.

`````````````js
var str = "esta string \
está quebrada \
em várias\
linhas."
console.log(str);   // esta string está quebrada em várias linhas.
`````````````

Embora JavaScript não tenha sintaxe "heredoc", você pode adicionar uma quebra de linha e um escape de quebra de linha no final de cada linha:

`````````````js
var poema =
"Rosas são vermelhas\n\
Violetas são azuis,\n\
Esse seu sorriso\n\
é o que me seduz. (Lucas Pedrosa)"
`````````````