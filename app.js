

// ============Model=============
const booksData = [{
    'title' : 'JavaScript',
    'author' : 'John',
    'category' : 'Programming'
},
{
    'title' : 'ES6',
    'author' : 'Sally',
    'category' : 'Programming'
},
{
    'title' : 'ReactJS',
    'author' : 'Peter',
    'category' : 'Programming'
},
{
    'title' : 'HTML',
    'author' : 'Hana',
    'category' : 'Programming'
},
{
    'title' : 'Java',
    'author' : 'Sona',
    'category' : 'Programming'
}]

// ============View=============

class BookView {
    init() {
        this.renderBookListModule();
        this.renderBookDetailsModule(0);
        this.addBookModule();
    }

    renderBookListModule() {
        // get all books and assign  to books
        const books = bookApp.getBooks();
    
        // cache #book-list DOM
        const $bookListUI = document.getElementById('book-list');
    
        // cleare HTML from the DOM
        $bookListUI.innerHTML = '';
    
        for (let i = 0, len = books.length;  i < len; i++){
            let $li = document.createElement('li');
            $li.setAttribute('class', 'book-list-item');
            $li.setAttribute('data-index', i);
            $li.innerHTML=`${books[i]['title']}`;
            $li.addEventListener("click", this.renderBookDetailsModule);
            $bookListUI.append($li);            
        }
    } 

    renderBookDetailsModule(e) {
        let selectedIndex = null;
        if(typeof e === 'object'){
            e.stopPropagation();
            selectedIndex = this.getAttribute('data-index')            
        }
        else {
            selectedIndex = e ;
        }
        const selectedItem = bookApp.getBook(selectedIndex)

        const $bookItemUI = document.getElementById('book-item-details');
        $bookItemUI.innerHTML = `${selectedItem['title']} <br> ${selectedItem['author']} <br> ${selectedItem['category']}`;
        
    }

    hightlightCurrentListItem(selectedIndex) {
        const $BookListItems = document.getElementsByClassName('book-list-item');
        for (let i = 0, len = $BookListItems.length; i < len; i++) {
            $BookListItems[i].classList.remove('active');
        }
        $BookListItems[selectedIndex].classList.add("active")
    }

    addBookModule() {
        const $addBook =document.getElementById('add-book-btn');
        $addBook.addEventListener("click", this.addBookBtnClicked.bind(this));
    }

    addBookBtnClicked() {
         // get the add book form inputs 
    const $addBookInputs = document.getElementsByClassName('add-book-input');
    // this object will hold the new book information
    let newBook = {};
    // loop through View to get the data for the model 
    for (let i = 0, len = $addBookInputs.length; i < len; i++) {
        let key = $addBookInputs[i].getAttribute('data-key');
        let value = $addBookInputs[i].value;
        newBook[key] = value;
    }
    // passing new object to the addBook method 
    bookApp.addBook(newBook);
    // render the book list with the new data set
    this.renderBookListModule();
    }


}

const bookView = new BookView();

// ============Controller=============

class BookCtrl {
    constructor(bookView){
        this.bookView = bookView;
    }
    init() {
        this.bookView.init();
    }

    // get all model data (books data) 
    getBooks() {
        return booksData;
    }

    // return the object(book) from booksData based on the index value.
    getBook(index) {
        return booksData[index];        
    }

    //
    addBook(book) {
        booksData.push(book);
    }
}



const bookApp = new BookCtrl(bookView)

bookApp.init();




