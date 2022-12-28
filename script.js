let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readYet = readYet;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = Book("State", "Plato", 500, false)

const book2 = Book("Rottien Saari", "Jo Nesbø", 700, true)

addBookToLibrary(book1)
addBookToLibrary(book2)