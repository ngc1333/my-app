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

// loop over array and pass props to lower elements
// key needs to be set to some kind of unique value

/*
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
*/

// pass whole object as props
// can also use ...Object which is the same as *Object in python
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
        // return <Book book={...book} key={book.id} />;
      })}
    </section>
  );
}

// destructure whole object right away in the function
const Book = ({ book: { img, title, author } }) => {
  // const { img, title, author } = props.book;   is the more clear version
  // const { img, title, author } = props   with props as function parameter if using ...
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
