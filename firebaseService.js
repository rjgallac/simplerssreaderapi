var firebase = require("firebase");

var config = {
    apiKey: process.env.API_KEY,
    databaseURL: process.env.DATABASE_URL,
};

firebase.initializeApp(config);
var db = firebase.database();

var ref = db.ref("/feed_data"); 

exports.getAll = function(){
    return new Promise((accept, reject) =>{
        ref.once("value", function(snapshot) {
            var data = snapshot.val();   
            accept(data);
        });
    });
}

exports.save = function(list) {
    return new Promise((accept, reject) => {
        list.forEach(i =>{
            ref.push({
              item: i
            });
        });              
        accept(list);
    })
    
}
