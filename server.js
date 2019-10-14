var express = require('express');
var app = express();
// app.all(express.static("myApp")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
//  res.redirect('/myApp/src/index.html'); 
res.redirect('http://localhost:6100/'); 

});
app.listen(6111, ':::');
console.log("MyProject Server is Listening on port 8080");