var express = require('express');
var app = express();
var fs = require('fs');

console.log("sever is starting");
app.use(express.static('/views')); 
app.use('/assets',express.static('assets')); 



var server = app.listen(8080, listening);

function listening(){
    console.log("listening");
}

//var genres = [horror, "romance", "science fiction", "comedy", "biography", "non-fiction", "fiction"];

var data = {
    bookstore:[
    
    book = {
        title: "Harry Potter",
        genre: "science fiction",
        cover: "https://ryan1bowen.files.wordpress.com/2015/01/harry-potter-books.jpg"
    },
    
    book = {
        title: "Pride and Prejudice",
        genre: "romance",
        cover: "http://www.g-pop.net/images/pridenovel.jpg"
    },
        
    book = {
        title: "Romeo and Juliet",
        genre: "romance", 
        cover: "http://www.blogsmonitor.com/news/gallery/romeo-and-juliet-by-william-shakespeare/romeo_and_juliet_by_william_shakespeare.jpg"
    },
    
    book = {
        title: "Doctor Sleep",
        genre: "horror",
        cover: "https://horrornovelreviews.files.wordpress.com/2013/05/doctor_sleep_full.jpg"
    },
    
    book = {
        title: "The Da Vinci Code",
        genre: "mystery",
        cover: "https://michaeljklassen.files.wordpress.com/2012/09/da-vinci-code.gif"
    },
        
    book = {
        title: "The Lord of the Rings",
        genre: "fantasy",
        cover: "https://en.wikipedia.org/wiki/File:First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
        
     book = {
        title: "American Psyco",
        genre: "horror",
        cover: "https://alphashadowsblog.files.wordpress.com/2014/03/american-psycho.jpg"
    },
        
    book = {
        title: "All the Beautiful Sinners",
        genre: "crime",
        cover: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312042244i/1111572._UY475_SS475_.jpg"
    },   
        
    book = {
        title: "The Alchemist",
        genre: "fiction",
        cover: "https://fictivecharacters.files.wordpress.com/2010/11/the_alchemist.jpg"
    },
        
    book = {
        title: "The Picture of Dorian Gray",
        genre: "fiction",
        cover: "http://ecx.images-amazon.com/images/I/41cUbBszshL.jpg"
    },
        
    book = {
        title: "Memoirs of a Geisha",
        genre: "historical novel",
        cover: "https://currentread.files.wordpress.com/2011/04/memoirs.jpg"
    }    
    ]      
};


app.get('/search/:genre', chooseGenre);

function chooseGenre(request, response){
    var genre = request.params.genre;
    //console.log(genre);
    
    //Retrieves books of desired genre
    var bookstore = data.bookstore;
    var relevantBooks = [];
    
    for(i=0; i<bookstore.length; i++){ 
        if (genre == bookstore[i].genre){ //bookstore[i] is just a book
            relevantBooks.push(bookstore[i]);
        }
    }
    console.log(relevantBooks);
    
    response.render('bookfinder.ejs', {genre: genre, 
                                       matchedBooks: relevantBooks });
    //console.log(JSON.stringify(data.bookstore));
}







//app.get('/search/:genre', function(req, res){
//    var genre = request.params.genre;
//    console.log(genre);
//    res.render('bookfinder.ejs', {genre: genre});
//    })
// 
