console.log("from lodash");

const newLoda=require('lodash');

console.log(newLoda.isString(true));
console.log(newLoda.isString('Pooja'));
var filterArray=newLoda.uniq(['Pooja',1,2,'Pooja',2,3,4]);
console.log(filterArray);