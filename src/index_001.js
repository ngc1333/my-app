import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// Component -> Function!

// function Greeting() {
//  return <h2>My First Component</h2>;
// }

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

// always return single html element
/* function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
      <ul>
        <li>s</li>
        <li>d</li>
        <li>v</li>
      </ul>
    </div>
  );
}
*/

// can also use <React.Fragment>---<.../> as the enclosing element to avoid divdivdividiv
// close every element <img />

/*
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>hello world</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/book-1.jpg" alt="Die Waffen des Lichts" />
);
const Title = () => {
  return <h2>Die Waffen des Lichts</h2>;
};

// inline css in jsx, still wins vs. external css! libraries use inline styles often!
const Author = () => {
  const inlineHeadingStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyle}>Ken Follet</h4>;
};

*/

// use props to pass parameters down to the lower element

const firstBook = {
  title: 'Die Waffen des Lichts',
  author: 'Ken Follet',
  img: './images/book-1.jpg',
};

const secondBook = {
  title: 'Die Einladung',
  author: 'Sebastian Fitzek',
  img: './images/book-2.jpg',
};

// use the children property to render anything additional inside the element
function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, rem
          quae nobis praesentium deserunt accusamus, nesciunt totam officiis
          saepe cum dolore illum. Quod nostrum optio numquam similique et vitae
          dicta!
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

// make the code more dynamic with js, can only use expressions in {} no statements

const Book = (props) => {
  const { img, title, author, children } = props;
  // can also destructure in function argument, also destructure the children
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
