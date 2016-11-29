//Grab modules 
var express = require("express"); 
var app = express(); 

//Set port 
var port = process.env.PORT || 8080; 

//Route
app.get('/', function(req, res){
    
    //Return ip, language and software details 
    var object = {
        "ipaddress": req.headers['x-forwarded-for'], 
        "language": req.headers["accept-language"].split(",")[0] , 
        "software": req.headers["user-agent"].match(/\((.*?)\)/)[1]
    }; 
    
    //send json object to client 
    res.end(JSON.stringify(object));
 
}); 

//Listen 
app.listen(port); 