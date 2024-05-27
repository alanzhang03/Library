let myLibrary = [];

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

const newButton = document.querySelector('#add-new');
const form = document.querySelector('#modal');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');
const clearLibraryButton = document.querySelector("#clear-library")

function displayForm(){
  form.show();
}

function closeForm(){
  form.close();
}

function submitForm() {
  const bookInput = document.querySelector("#newBookTitle").value;
  const authorInput = document.querySelector("#newAuthor").value;
  const pagesInput = document.querySelector("#bookPages").value;

  if (bookInput && authorInput && pagesInput) {
    const newBook = new Book(bookInput, authorInput, parseInt(pagesInput));
    addBookToLibrary(newBook);
    form.close();
  } else {
    alert('Please fill in all fields');
  }
  displayLibrary();
}

function clearLibrary(){
  const library = document.querySelector('#library');
  library.innerHTML = '';
  myLibrary.length = 0; 
}

newButton.addEventListener('click', displayForm);
closeButton.addEventListener('click', closeForm);
submitButton.addEventListener('click', submitForm);
clearLibraryButton.addEventListener("click", clearLibrary);


function displayLibrary() {
  const library = document.querySelector('#library');
  library.innerHTML = ''; 
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookDiv = document.createElement('div');
    bookDiv.textContent = book.info();
    bookDiv.classList.add('book-entry');
    library.appendChild(bookDiv);
  }
}

