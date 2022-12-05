const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const Form = document.querySelector('#book-form');

const UI = {
    displayBooks(){
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book) );
    },
   addBookToList(book){
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a hraf="#" class="btn btn-sm btn-danger delete">remove</a></td>
    `;
    list.appendChild(row);
 },

  deleteBook(el){
 if(el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
 }
 },

    clearfields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
 },
};

// Store books details
const Store = {
    getBooks() {
       let books;
       if(localStorage.getItem('books') === null){
           books =[];
       } else{
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
   },
    
    addBook(book) {
const books = Store.getBooks();
 books.push(book);
 localStorage.setItem('books', JSON.stringify(books));
   },

   removeBook(author){
  const books = Store.getBooks();
  let index = 0;
  books.filter(book => {
   if(book.author != author)
    index ++;
    else
    return;
  } )
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
   },
};

document.addEventListener('DOMContentLoaded', UI.displayBooks);
Form.addEventListener('submit', (e)=> {
e.preventDefault();

 const book = {
    author : author,
    title : title,
   }
});

UI.addBookToList(book);
Store.addBook(book);
UI.clearfields();

document.querySelector('#book-list').addEventListener('click', (e) =>{
    Store.removeBook(e.target.parentElement.previousElementSibling.innerHTML);
     UI.deleteBook(e.target);  
 });
 