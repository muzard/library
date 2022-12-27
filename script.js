let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readYet = readYet;
}

function addBookToLibrary() {
  let book = Book(arguments);
  myLibrary.push(book)
}

