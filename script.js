const harry1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, false);
const harry2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 251, false);
const harry3 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 317, false);
const harry4 = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 636, false);
const harry5 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 766, false);
const harry6 = new Book("Harry Potter and the Half-Blood Prince", "J.K Rowling", 607, false);
const harry7 = new Book("Harry Potter and the Deathly Hallows", "J.K Rowling", 607, false);

let myLibrary = [harry1, harry2, harry3, harry4, harry5, harry6, harry7];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    function info() {
        let isItRead = this.read ? "already read." : "not read yet."
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isItRead}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}



