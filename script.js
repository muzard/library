let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readYet = readYet;
}

function createItem(book) {
  const item = document.createElement("div");
  item.classList.add("item");

  const titleText = document.createTextNode(book.title);
  const title = document.createElement("div");
  title.classList.add("text");
  title.appendChild(titleText);
  item.appendChild(title);

  const authorText = document.createTextNode(book.author);
  const author = document.createElement("div");
  author.classList.add("text");
  author.appendChild(authorText);
  item.appendChild(author);

  const pagesText = document.createTextNode(`${book.pages} pages`);
  const pages = document.createElement("div");
  pages.classList.add("text");
  pages.appendChild(pagesText);
  item.appendChild(pages);

  const readYetText = document.createTextNode(
    book.readYet ? "Read" : "Not read"
  );
  const readYetElement = document.createElement("button");
  readYetElement.classList.add("text");
  readYetElement.appendChild(readYetText);
  item.appendChild(readYetElement);

  const grid = document.getElementById("content");
  grid.appendChild(item);
}

const book1 = new Book("State", "Plato", 500, false);

const book2 = new Book("Rottien Saari", "Jo Nesbø", 700, true);

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function createCards() {
  for (let book in myLibrary) {
    createItem(book)
  }
}