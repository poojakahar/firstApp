const  request=require('request');

request({
    url: 'Data.json',
    json: true
},(error,response,body)=>{
    console.log(JSON.stringify(body));
});