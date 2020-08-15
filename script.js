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


//Generate list for all foods
const listOfBook = (e) => {
    //add html
        const html = books.map (book => `
          <table class= ".list">
            <tr>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.genre}</td>
              <td>${book.pages}</td>
            </tr>
          </table>`
        );
            list.innerHTML = html;           
    };
    listOfBook();
 

//we need an array to hold our state
// const books = [];

/*const handleSubmit = e => {
    e.preventDefault();//prevent the page from reloading
    const desOfBook = e.currentTarget.book.value;
    if (!desOfBook) return;
    console.log(desOfBook);
    const book = {
        title,
        author,
        page,
    };
    books.push(book);
    console.log(`There are now ${books.length}`); 
    e.target.reset();
};

const displayList = () => {
    const html = books
        .map(
            book =>
                `<li class="item">
                <input
                   value="${title.value}"/>
                <input
                   value="${author.value}"/>
                <input
                   value="${page.value}"/>
                <span class="bookList">${book.desOfBook}</span>
            </li>`
        )
        .join('');
    list.innerHTML = html;
};

descriptionForm.addEventListener('submit', handleSubmit);
*/