const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages= pages;

}

Book.prototype.info = function() {
  return `${this.name} by ${this.author} has ${this.pages} total pages`;
}

function addBookToLibrary(book) {
   myLibrary.push(book);
}



const percyJackson = new Book("Percy Jackson", "Rick", 250);
const lordOfTheRings = new Book("Lord of the Rings", "J.K. Rowling", 300);
const markOfAthena = new Book("Mark of Athena", "Rick", 550);
addBookToLibrary(percyJackson);
addBookToLibrary(lordOfTheRings);
addBookToLibrary(markOfAthena);

//console.log(myLibrary);

function displayLibrary(){
    const library = document.querySelector('#library');
    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];
        const bookDiv = document.createElement('div');
        bookDiv.textContent = book.info();
        bookDiv.classList.add('book-entry');
        library.appendChild(bookDiv);
  }
}

displayLibrary();

const newButton = document.querySelector('#add-new');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#close-modal');



function displayForm(){
  form.show();
}

function closeForm(){
  form.close();
}

newButton.addEventListener('click', displayForm);
closeButton.addEventListener('click', closeForm);
