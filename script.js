const libraryArray = [];

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw new Error("You must include the 'new' operator!!");
  }

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.statusBook = function () {
    console.log(
      `The book title is ${this.title}, while the author is ${this.author}.
The book contains ${this.pages} pages and the reading status is ${this.isRead}`
    );
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  libraryArray.push(book);
  displayBooks();
}

const container = document.getElementById("library-container");

function displayBooks() {
  container.innerHTML = "";

  libraryArray.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>

      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
    `;

    container.appendChild(card);
  });
}

addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);
addBookToLibrary("The Pragmatic Programmer", "Andrew Hunt", 352, false);