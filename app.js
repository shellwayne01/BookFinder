var express = require('express');
var app = express();
var fs = require('fs');

console.log("sever is starting");
app.use(express.static('views')); 


app.get('/search/:genre', function(req, res){
    var genre = request.params.genre;
    console.log(genre);
    res.render('bookfinder.ejs', {genre: genre});
    }
    );
 

.listen(8080);