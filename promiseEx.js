var newPromise=new Promise((resolve,reject)=>{
    resolve('hello');
reject('Bye');
});

newPromise.then((msg)=>{
    console.log("Sucess",msg);
//resolve
});

