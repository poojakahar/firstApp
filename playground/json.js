/*var obj={
    name:'Pooja'
};

var stringObj=JSON.stringify(obj);
console.log(typeof  stringObj);
console.log(stringObj);*/
const fs=require('fs');

var obj={
  name: 'Pooja',
  age: 22
};

// writing in file
var strObj=JSON.stringify(obj);
fs.writeFileSync('note.json',strObj);

//reading from file
var data=fs.readFileSync('note.json');
var newObj=JSON.parse(data);

console.log(newObj.name);

