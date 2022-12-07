const bookList = document.querySelector('#list');
const addBook = document.querySelector('#add-new');
const contact = document.querySelector('#contact');
const addSection = document.querySelector('.add');
const contactSection = document.querySelector('.contact');
const listSection = document.querySelector('.list');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static displayBooks() {
    const books = Book.getBooks();
    books.forEach((book) => Book.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>"${book.title}" by ${book.author}</td>
    <td class="d-none">${book.author}</td>
    <td><a href="#" class="btn btn-sm btn-danger delete float-end">remove</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = Book.getBooks();
    let index = 0;
    books.filter((book) => {
      if (book.author !== author) { index = +1; }
      return books;
    });
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Book.displayBooks);
const Form = document.querySelector('#book-form');
Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Book.addBookToList(book);

  Book.addBook(book);

  Book.clearField();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.removeBook(e.target.parentElement.previousElementSibling.innerHTML);
  Book.deleteBook(e.target);
});

function displayDate() {
  document.getElementById('date').innerHTML = Date();
}
const onload = () => {
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
  listSection.style.display = 'block';
};
window.addEventListener('load', onload());
window.addEventListener('load', displayDate);
bookList.addEventListener('click', () => {
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
  listSection.style.display = 'block';
});
addBook.addEventListener('click', () => {
  contactSection.style.display = 'none';
  addSection.style.display = 'block';
  listSection.style.display = 'none';
});
contact.addEventListener('click', () => {
  contactSection.style.display = 'block';
  addSection.style.display = 'none';
  listSection.style.display = 'none';
});