const books = [
    {
        title: 'Harry Potter',
        author: 'Jk',
        genre: 'fantasy',
        pages: 373,
        read: true,
    },
    {
        title: 'Clean code',
        author: 'Robert',
        genre: 'It',
        pages: 435,
        read: true,
    },
    {
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'memoir',
        pages: 370,
        read: false,
    },
];

const descriptionForm = document.querySelector('.book-description');
const list = document.querySelector('.list');
const listOfBook = document.querySelector('.list-of-book');
const addBooksForm = document.querySelector('.add-book-form');
const addBtn = document.querySelector('.add-book');
const allBooks = [];

//Generate list for the books in the object
const listedBook = (e) => {
    //add html
    const html = books.map(book => `
          <tr class= ".list">
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td>${book.pages}</td>
          </tr>`
    ).join(' ');
    list.innerHTML = html;
};

listedBook();

//function that will  grab th form

const getListOfBook = () => {
    const html = books
        .map(
            book =>
                `<ul class="list-of-book">
                    <input
                       value="${title.value}"/>
                    <input
                       value="${author.value}"/>
                    <input
                       value="${pages.value}"/>
                    <input
                       value="${genre.value}"/>
                    <span class="bookList">${book.listedBook}</span>
                </ul>`
        )
        .join('');
    list.innerHTML = html;
};


//handle the subnit button
const handleSubmit = e => {
    e.preventDefault;
    const form = e.currentTarget;
    const { title, author, pages, genre } = form;
    // if (!form) return;

    const newBook = {
        title,
        author,
        pages,
        genre,
    }
    allBooks.push(newBook);
};

//listen for submit
addBooksForm.addEventListener('submit', handleSubmit);
