function Book() {
    //just creates an empty book.
}
function Book(title, length, author) {
    this.title = title;
    this.Length = length;
    this.author = author;
}
Book.prototype = {
    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: "",
    currentPage: 0,
    title: "",
    flipTo: function FlipToAPage(pNum) {
        this.currentPage = pNum;
    },
    turnPageForward: function turnForward() {
        this.flipTo(this.currentPage++);
    },
    turnPageBackward: function turnBackward() {
        this.flipTo(this.currentPage--);
    }
};
function Author() {
}
function Author(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
Author.prototype = {
    firstName: "",
    lastName: "",
    gender: "",
    BookCount: 0
}
var books = new Array(new Book(),
    new Book("First Edition", 350, new Author("Random", "Author", "M"))
);

var popupBook = Object.create(Book.protoType, {
    hasSound: { value: true },
    showPopUp: {
        value: function showPop() {
            //do logic to show a popup
        }
    }
});

function PopUpBook() {
    Book.call(this);
}
PopUpBook.prototype = Book.prototype;
PopUpBook.prototype.hasSound = false;
PopUpBook.prototype.showPopUp = function ShowPop() { };