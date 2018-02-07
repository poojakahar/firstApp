//callback function

var getData=(id,callback)=>{
    var userObj={
        id: id,
        name: "Pooja",
        yob: 1995
    }

    callback(userObj);
}

getData("1",(usr)=>{
    console.log(usr);
});


