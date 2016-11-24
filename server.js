var express = require("express"); 
var app = express(); 
var os = require('os');


app.get('/', function(req, res){
    
    var object = {
        "ipaddress": req.headers['x-forwarded-for'], 
        "language": req.headers["accept-language"], 
        "software": os.platform() + " " + os.release() //'10.8.0'
    }; 
    
    res.end(JSON.stringify(object));
 
}); 

app.listen(process.env.PORT || 8080); 