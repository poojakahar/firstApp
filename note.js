console.log("Starting note.js");

const fs=require('fs');

var add=(title,body)=>{
    var notes=[];
    var note={
      title: title,
      body: body,
    };

    try
    {
        var readData=fs.readFileSync('nodeData.json');
        var notes=JSON.parse(readData);
    }
    catch (e){}

    var dupVal=notes.filter((note)=>note.title===title);
    //console.log(readDataStr);

    if(dupVal.length===0) {
        notes.push(note);
        var notesStr=JSON.stringify(notes);
        fs.writeFileSync('nodeData.json',notesStr);
    }
    else
    {
        console.log("Duplicate value");
    }
}

module.exports={
    add
};