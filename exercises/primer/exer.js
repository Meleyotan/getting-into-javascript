function addFavoriteBook(bookName){
    if (!bookName.includes("Great")){
        favoriteBooks.push(bookName);
    }
}

var favoriteBooks = []

function printFavoriteBooks(){
    for (let bookName of favoriteBooks){
        console.log(bookName);
    }
    console.log(`Favorite Books: ${favoriteBooks}`)
}
addFavoriteBook("A song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime and Punishment");
printFavoriteBooks();