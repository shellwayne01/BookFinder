var express = require('express');
var app = express();
var fs = require('fs');

console.log("sever is starting");
app.use(express.static('views')); 


var server = app.listen(8080, listening);

function listening(){
    console.log("listening");
}

//var genres = [horror, "romance", "science fiction", "comedy", "biography", "non-fiction", "fiction"];

var data = {
    bookstore:[
    {
    book: {
        title: "Harry Potter",
        genre: "science fiction"
    }},
    
    {
    book: {
        title: "Pride and Prejudice",
        genre: "romance"
    }},

     {
    book: {
        title: "Romeo and Juliet",
        genre: "romance"
    }},

     {
    book: {
        title: "Doctor Sleep",
        genre: "horror"
    }},

     {
    book: {
        title: "The Da Vinci Code",
        genre: "mystery"
    }} ,

     {
    book: {
        title: "Doctor Sleep",
        genre: "horror"
    }} ,

     {
    book: {
        title: "The Lors of the Rings",
        genre: "fantasy"
    }},

     {
    book: {
        title: "American Psyco",
        genre: "horror"
    }},

     {
    book: {
        title: "All the Beautiful Sinners",
        genre: "crime"
    }}    
  

    ]
      
};



app.get('/search/:genre', chooseGenre);

function chooseGenre(request, response){
    var genre = request.params.genre;
    console.log(genre);
    response.render('bookfinder.ejs', {genre: genre, bookstore: data.bookstore});
}







//app.get('/search/:genre', function(req, res){
//    var genre = request.params.genre;
//    console.log(genre);
//    res.render('bookfinder.ejs', {genre: genre});
//    })
// 
