const descriptionForm = document.querySelector('.book-description');
const list = document.querySelector('.list');

//we need an array to hold our state
const books = [];

const handleSubmit = e => {
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
