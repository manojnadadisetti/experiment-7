// sample data (could be replaced with API call later)
const books = [
    { title: "JavaScript Basics", author: "John Smith", price: "₹399" },
    { title: "Learning HTML & CSS", author: "Anita Rao", price: "₹299" },
    { title: "Mastering Bootstrap", author: "K. Kumar", price: "₹349" },
    { title: "Data Structures in C", author: "P. Gupta", price: "₹450" },
    { title: "Java for Beginners", author: "R. Mehta", price: "₹500" },
    { title: "Python Essentials", author: "S. Iyer", price: "₹420" }
];

// create one Bootstrap card column
function createBookCard(book) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-4"; // responsive grid [web:3]

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm"; // card utility classes [web:15]

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = book.title;

    const author = document.createElement("p");
    author.className = "card-text mb-1";
    author.textContent = "Author: " + book.author;

    const price = document.createElement("p");
    price.className = "card-text text-success fw-semibold";
    price.textContent = "Price: " + book.price;

    body.appendChild(title);
    body.appendChild(author);
    body.appendChild(price);

    card.appendChild(body);
    col.appendChild(card);

    return col;
}

// load all books using a loop
function loadBooks() {
    const row = document.getElementById("bookRow");
    row.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const cardCol = createBookCard(books[i]);
        row.appendChild(cardCol); // DOM createElement + appendChild [web:13][web:19]
    }
}

// run after page loads
window.onload = loadBooks;