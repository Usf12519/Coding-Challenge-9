// Task 1: Creating a Book Class

class Book {
    constructor( title, author, ISBN, _isAvailable)
     {
        _title = title;
        _author = author;
        _ISBN = ISBN;
        _isAvailable = _isAvailable;
        
    }
    
}

// Task 2: Creating a Section Class

class Section {
    constructor( Name , Book)
     {
        fiction = new Section( "Fiction")
        Math = new Section("Math")
        English = new Section("English")
        
    };
    
    fiction.addBook(Book1);
    math.addBook(Book2);
    english.addBook(Book3);
    
}

// Task 3: Creating a Patron Class

class Patron {
    constructor( Name , borrowedBooks)
     {
        regularPatron = new Patron("Casey DeSmith");
        vipPatron = new VIPPatron("Rebecca Smith" , true);
        
    }
}

// Borrowing and Returning Books

regularPatron.borrowBook(book1);
vipPatron.borrowBook(book1);
regularPatron.returnBook(book1);
vipPatron.returnBook(book1);

// Task 4: Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor( name , property)
     {
        super(name)
        this.property = true
    
    }
}
    else {
        console.log(`${this.name} priority to borrow "${book}"`);
        super.borrowBook(book);
    }

// Task 5: Handle Books Borrowing and Returning

calculateTotalBooksAvailable()
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Math: ${math.getAvailableBools()}`);
console.log(`Total available books in English: ${english.getAvailableBools()}`);

