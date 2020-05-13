class Book {
    constructor(title, auther, category){
        this.title = title
        this.auther = auther
        this.category = category
    }

    setTitle(title) {
        this.title = title
    } 

    getTitle() {
        return this.title
    }

    setAuther(auther) {
        this.auther = auther
    } 

    getAuther() {
        return this.auther
    }

    setCategory(category) {
        this.category = category
    } 

    getCategory() {
        return this.category
    }
}

const bookTitle = document.querySelector('[data-title]')
const bookAuther = document.querySelector('[data-auther]')
const bookCategory = document.querySelector('[data-category]')

const book1 = new Book("JavaScript", "John", "Programming")
book1.setTitle("HTML")
console.log(book1.auther)
