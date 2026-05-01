let movie={
    title:"Inception",
    director:"C Nolan",
    year:2010
}

movie.rating=9
delete movie.year

movie.reviews={
    user1:"Excellent",
    user2:"Amazing"
}

movie.showTitle=function(){
    console.log(this.title);
    
}

// movie.showTitle()
// // console.log(movie);

// for(let key in movie){
//     console.log(key,movie[key]);
    
// }

console.log("rating" in movie);
