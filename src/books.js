import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

export const books = [
  {
    title: 'Die Waffen des Lichts',
    author: 'Ken Follet',
    img: img1,
    id: 1,
  },
  {
    title: 'Die Einladung',
    author: 'Sebastian Fitzek',
    img: img2,
    id: 2,
  },
  {
    title: 'Die Physiker. Eine Komödie in zwei Akten',
    author: 'Friedrich Dürrenmatt',
    img: img3,
    id: 3,
  },
];

// export default books;  without export ... before object, can only use if one export
// this removes the need to correctly name it when importing
