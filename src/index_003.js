import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    title: 'Die Waffen des Lichts',
    author: 'Ken Follet',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    title: 'Die Einladung',
    author: 'Sebastian Fitzek',
    img: './images/book-2.jpg',
    id: 2,
  },
];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

/* const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name);
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me!</button>
    </section>
  );
};
*/

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // need to pass the reference and not the function!
  // write wrapper function or pass anonymous function!
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
