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

// Store
