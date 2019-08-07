class Book {
  constructor (title, author, pages, description, currentPage, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = currentPage;
    this.read = read;
  }
  
  // Adding a readBook method to the class Book
  readBook(currentPage) {   
    // user gets warning for invalid page number
    if ((currentPage > this.pages) || (currentPage <= 0)) { 
      alert('Invalid input!');
    } else {
      this.currentPage = currentPage;
      if (this.currentPage == this.pages) {
        this.read = true;
        console.log('The book has been read');
      }
    }
  }  
}

export { Book };
