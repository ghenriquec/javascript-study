# Import 
A declaração estática import é usada para importar vínculos que são exportados por um outro módulo. Os módulos importados estão em strict mode,  declarado como tal ou não. A declaração import não pode ser usada em scripts embutidos, a menos que tal script tenha um type="module".
Há também uma função dinâmica import(), que não requer scripts de type="module".
A compatibilidade com versões anteriores pode ser garantida usando o atributo nomodule na tag de script.
A importação dinâmica é útil em situações em que você deseja carregar um módulo condicionalmente ou sob demanda. 

## Sintaxe Import 
````````js
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name"; var promise = import("module-name");
````````
# Export 
O export é utilizado quando criamos módulos JavaScript para exportar ligações em tempo real para suas funções, objetos ou valores primitivos de um módulo sejam utilizados por outros programas através de declarações import. Ligações que são exportadas ainda podem ser modificadas localmente; quando importadas, embora elas possam ser lidas somente pelo módulo que as importou, seu valor é atualizado sempre que ela modificada pelo módulo que a exportou.
Módulos exportados ficam em strict mode, independentemente se é declarado dessa forma, ou não. Export não pode ser utilizado em scripts embutidos.

## Sintaxe Export 

Há dois diferentes tipos de export, explícito(named) e padrão(default).  Pode-se ter várias exportações explícitas por módulo, mas apenas uma padrão. Cada tipo corresponde à uma da síntaxe acima:

Exportações explícitas:

````````js
// exporta recursos declarados anteriomente
export { myFunction, myVariable };

// exporta recursos individuais (pode exportar var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };
````````

Exportação padrão (pode ser feita apenas uma por script):
````````js
// exporta um recurso declarado anteriormente como padrão
export { myFunction as default };

// exporta recursos individuais como padrão
export default function () { ... }
export default class { .. }
````````

Exportações explícitas são úteis para exportar vários valores. Durante a importação, é obrigatório usar o mesmo nome do objeto correspondente.

Mas a exportação padrão pode ser importada com qualquer nome, por exemplo:
````````js
// arquivo test.js
let k; export default k = 12;

// algum outro arquivo
import m from './test'; // note que temos a liberdade de usar import m ao invés de import k, porque k era uma exportaçào padrão
console.log(m);        // vai retornar log 12
````````

Você também pode renomear exportações explícitas para evitar conflitos e nome:
````````js
export { myFunction as function1,
         myVariable as variable };
````````