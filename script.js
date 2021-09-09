const harry1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, false);
const harry2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 251, false);
const harry3 = new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 317, false);
const harry4 = new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 636, false);
const harry5 = new Book("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 766, false);
const harry6 = new Book("Harry Potter and the Half-Blood Prince", "J.K Rowling", 607, false);
const harry7 = new Book("Harry Potter and the Deathly Hallows", "J.K Rowling", 607, false);

let myLibrary = [harry1, harry2, harry3, harry4, harry5,harry1, harry2, harry3, harry4, harry5,
    harry1, harry2, harry3, harry4, harry1, harry2, harry3, harry4, harry5]

function Book(title, author, pages, read, comments) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.comments = comments
    this.info = function() {
        let isItRead = this.read ? "already read." : "not read yet.";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isItRead}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const bookshelf = document.querySelector("#bookshelf");
const addBookForm = document.querySelector("#addForm");
const addBookMenuButton = document.querySelector("#addBook");
const showInfoButton = document.querySelector("#bookInfo");
const removeSelected = document.querySelector("#removeBook");
const closeAddForm = document.querySelector("#closeAddForm");
const deletePromptOptions = document.querySelectorAll(".deletePrompt")
const deletePrompt = document.querySelector("#deletePrompt")

let lastBookSelected;

addBookMenuButton.addEventListener("click", () => {
    if (myLibrary.length == 20) {
        alert("Sorry, your library is full already. Try deleting some books.")
        return;
    }
    addBookForm.style.visibility = "visible"
    deletePrompt.style.visibility = "hidden"
    if(lastBookSelected) {
        lastBookSelected.classList.remove("selectedBookDiv")
        lastBookSelected = null;
    }
})

closeAddForm.addEventListener("click", () => {
    addBookForm.style.visibility = "hidden"
    addBookForm.reset()
})

addBookForm.addEventListener("submit", e => {
    e.preventDefault()
    if (!e.target.title.value || !e.target.author.value ||
        !e.target.pages.value || !e.target.read.value) {
            alert("Please fill all the fields.")
    } else {    
        let newBook = new Book(e.target.title.value, e.target.author.value,
                               e.target.pages.value, e.target.read.value)
        addBookToLibrary(newBook)
        updateBookshelf()
        hideAndResetForm()
    }
})

function hideAndResetForm() {
    addBookForm.style.visibility = "hidden";
    addBookForm.reset()
}


removeSelected.addEventListener("click", () => {
    if(lastBookSelected) {deletePrompt.style.visibility = "visible"};
})

deletePromptOptions.forEach(button => button.addEventListener("click", (e) => {
    if (e.target.value === "yes") {
        removeBook(lastBookSelected);
    }
    lastBookSelected = null;
    updateBookshelf()
    setIndexAttributeToBookDivs()
    deletePrompt.style.visibility = "hidden";
}))


function removeBook(bookToDelete) {
    myLibrary = myLibrary.filter((book, index) => index != bookToDelete.getAttribute("index"))
}

function createDivForBook(book) {
    let text = document.createElement("p");
    text.innerText = `${book.title}`;
    text.classList.add("bookText")
    let newDiv = document.createElement("div");
    newDiv.classList.add("bookDiv")
    newDiv.appendChild(text)
    return newDiv
}

function displayLibraryOnBookshelf() {
    myLibrary.forEach(book => bookshelf.appendChild(createDivForBook(book)))
}

function makeBooksSelectable() {
    bookshelf.querySelectorAll("div").forEach(book => book.addEventListener("click", () => {
        book.classList.toggle("selectedBookDiv");
        if (lastBookSelected    ) {lastBookSelected.classList.remove("selectedBookDiv")};
        lastBookSelected = book;
    }))
}

function cleanBookshelf() {
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild)
    }
}

function setIndexAttributeToBookDivs() {
    let bookshelfDivs = bookshelf.querySelectorAll("div")
    for (let i = 0; i < bookshelfDivs.length; i++) {
        bookshelfDivs[i].setAttribute("index", `${i}`)
    }
}

function updateBookshelf() {
    cleanBookshelf()
    displayLibraryOnBookshelf()
    makeBooksSelectable()
}

updateBookshelf()
setIndexAttributeToBookDivs()