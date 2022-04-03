# Comparadores JavaScript

<table class="standard-table">
 <caption>Operadores de comparação</caption>
 <thead>
  <tr>
   <th scope="col">Operador</th>
   <th scope="col">Descrição</th>
   <th scope="col">Exemplos que retornam verdadeiro</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Igual (<code>==</code>)</td>
   <td>Retorna verdadeiro caso os operandos sejam iguais.</td>
   <td><code>3 == var1</code>
    <p><code>"3" == var1</code></p>
    <code>3 == '3'</code></td>
  </tr>
  <tr>
   <td>Não igual (<code>!=</code>)</td>
   <td>Retorna verdadeiro caso os operandos não sejam iguais.</td>
   <td><code>var1 != 4<br>
    var2 != "3"</code></td>
  </tr>
  <tr>
   <td>Estritamente igual (<code>===</code>)</td>
   <td>Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também <a href="/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is</code></a> e <a href="/pt-BR/docs/Web/JavaScript/Guide/Sameness">igualdade em JS</a>.</td>
   <td><code>3 === var1</code></td>
  </tr>
  <tr>
   <td>Estritamente não igual (<code>!==</code>)</td>
   <td>Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.</td>
   <td><code>var1 !== "3"<br>
    3 !== '3'</code></td>
  </tr>
  <tr>
   <td>Maior que (<code>&gt;</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.</td>
   <td><code>var2 &gt; var1<br>
    "12" &gt; 2</code></td>
  </tr>
  <tr>
   <td>Maior que ou igual (<code>&gt;=</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.</td>
   <td><code>var2 &gt;= var1<br>
    var1 &gt;= 3</code></td>
  </tr>
  <tr>
   <td>Menor que (<code>&lt;</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.</td>
   <td><code>var1 &lt; var2<br>
    "12" &lt; "2"</code></td>
  </tr>
  <tr>
   <td>Menor que ou igual (<code>&lt;=</code>)</td>
   <td>Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.</td>
   <td><code>var1 &lt;= var2<br>
    var2 &lt;= 5</code></td>
  </tr>
 </tbody>
</table>