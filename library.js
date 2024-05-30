let myLibrary = [];

function Book(name, author, pages, symbol) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.symbol = symbol;
}

Book.prototype.info = function() {
  return this.name + "\n" + this.author + "\n" + this.pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  saveLibrary();
}

function saveLibrary() {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

function loadLibrary() {
  const libraryData = localStorage.getItem('library');
  if (libraryData) {
    myLibrary = JSON.parse(libraryData);
    displayLibrary();
  }
}

const newButton = document.querySelector('#add-new');
const form = document.querySelector('#modal');
const closeButton = document.querySelector('#close-button');
const submitButton = document.querySelector('#submit-button');
const clearLibraryButton = document.querySelector("#clear-library");

function displayForm() {
  form.showModal();
}

function closeForm() {
  form.close();
}

function submitForm() {
  const bookInput = document.querySelector("#newBookTitle").value;
  const authorInput = document.querySelector("#newAuthor").value;
  const pagesInput = document.querySelector("#bookPages").value;
  let bookSymbols = [ "📗", "📙", "📘", "📕"];

  if (bookInput && authorInput && pagesInput) {
    let randomBook = bookSymbols[Math.floor(Math.random() * bookSymbols.length)];
    const newBook = new Book(bookInput, authorInput, parseInt(pagesInput), randomBook);
    addBookToLibrary(newBook);
    form.close();
    displayLibrary();
  } else {
    alert('Please fill in all fields');
  }
}

function clearLibrary() {
  myLibrary = [];
  saveLibrary();
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
    titleDiv.innerText = book.symbol + "\n" + book.name;
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
      saveLibrary();
      displayLibrary();
    });

    const readButton = document.createElement("button");
    readButton.className = "read-button-style";
    readButton.textContent = "Not Read";

    readButton.addEventListener("click", () => {
      if (readButton.textContent === "Read") {
        readButton.textContent = "Not Read";
        readButton.style.backgroundColor = "lightcoral";
      } else {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = "lightgreen";
      }
      saveLibrary();
    });

    const readRemoveButtonContainer = document.createElement("div");
    readRemoveButtonContainer.className = "read-remove-button-container";

    readRemoveButtonContainer.appendChild(removeButton);
    readRemoveButtonContainer.appendChild(readButton);

    bookDiv.appendChild(readRemoveButtonContainer);
    library.appendChild(bookDiv);
  }
}

newButton.addEventListener('click', displayForm);
closeButton.addEventListener('click', closeForm);
submitButton.addEventListener('click', submitForm);
clearLibraryButton.addEventListener("click", clearLibrary);

document.addEventListener('DOMContentLoaded', loadLibrary);
