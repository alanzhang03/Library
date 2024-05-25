const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages= pages;

}

Book.prototype.info = function() {
  return `${this.name} by ${this.author} has ${this.pages} total pages`


}

function addBookToLibrary(book) {
   myLibrary.push(book);
}

const percyJackson = new Book("Percy Jackson", "Rick", "250")
const lordOfTheRings = new Book("Lord of the Rings", "J.K. Rowling", "300")
const markOfAthena = new Book("Mark of Athena", "Rick", "550")
addBookToLibrary(percyJackson.info());
addBookToLibrary(lordOfTheRings.info());
addBookToLibrary(markOfAthena.info());

console.log(myLibrary);



for(let i = 0; i <= myLibrary.length; i++){
    document.createElement('div');
    
}