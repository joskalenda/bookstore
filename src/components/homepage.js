/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Homepage = () => {
  const books = useSelector((e) => e.books);
  return (
    <>
      <div>
        {books.map((item) => (
          <Book
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            genre={item.genre}
            completed={item.completed}
          />
        ))}
      </div>
      <InputBook />

    </>
  );
};

export default Homepage;
