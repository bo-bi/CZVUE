// //默认引入
import Cal from './cal.js';
// //声明式引入
import {obj1,obj2} from './cal.js';
import {obj4} from './cal.js';

console.log(Cal);
console.log(obj1);
console.log(obj2);
console.log(obj4);

//--------------------------------------------------------------------------------
//全体引入
import * as allObj from './cal.js';

console.log(allObj);
