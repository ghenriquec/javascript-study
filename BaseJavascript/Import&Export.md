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