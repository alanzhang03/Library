let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages= pages;

}


Book.prototype.info = function() {
  return this.name + "\n" + this.author + "\n" + this.pages;

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
  form.showModal();
}

function closeForm(){
  form.close();
}

function submitForm() {
  const bookInput = document.querySelector("#newBookTitle").value;
  const authorInput = document.querySelector("#newAuthor").value;
  const pagesInput = document.querySelector("#bookPages").value;

  bookInput.className = "newBookTitle";

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
  myLibrary = [];
  displayLibrary();
}



function displayLibrary() {
  const library = document.querySelector('#library');
  library.innerHTML = ''; 
  for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-entry';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'book-title';
      titleDiv.innerText = book.name;
      bookDiv.appendChild(titleDiv);

      const authorDiv = document.createElement('div');
      authorDiv.className = 'book-author';
      authorDiv.innerText = `By: ${book.author}`;
      bookDiv.appendChild(authorDiv);

      const pagesDiv = document.createElement('div');
      pagesDiv.className = 'book-pages';
      pagesDiv.innerText = `${book.pages} total pages`;
      bookDiv.appendChild(pagesDiv);

      const removeButton = document.createElement("button");
      removeButton.className = "remove-button-style";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
          myLibrary.splice(i, 1);
          displayLibrary();
      });

      bookDiv.appendChild(removeButton);
      library.appendChild(bookDiv);
  }
}




newButton.addEventListener('click', displayForm);
closeButton.addEventListener('click', closeForm);
submitButton.addEventListener('click', submitForm);
clearLibraryButton.addEventListener("click", clearLibrary);