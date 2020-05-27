import {hello} from './examples_exports/first_export.js';
import {User as User_export} from './examples_exports/second_export.js';
import {object} from "./examples_exports/three_export.js";
import {MyExport as test_export} from "./examples_exports/four_export.js";
import * as text from "./examples_exports/five_export.js";
import default_export from "./examples_exports/six_export.js";
import {default as my_default_export,number} from "./examples_exports/seven_export.js";
import {first,second} from './examples_exports/examples_re-export/finish_re-export.js';

hello();

const obj = new User_export('Hello,I\'\m Export!');
console.log(obj.name);

console.log(object);

console.log(new test_export)


console.log(`${text.first_text} ${text.second_text}`);

console.log(default_export);

console.log(my_default_export());
console.log(number);
console.log(first());
console.log(second());