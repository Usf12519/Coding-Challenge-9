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
