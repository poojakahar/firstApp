console.log("Hello World");

const fs=require('fs');
var os=require('os');
var note=require('./note.js');
var yargs=require('yargs');

var arg=yargs.argv;
console.log(arg);
var op=arg._[0];

if(op==='add')
{
    note.add(arg.title,arg.body);
}
else
{
    console.log('Command not found');
}
//fs.appendFile('greeting.txt',` Hello ${user.username}! You are ${note.age}`);