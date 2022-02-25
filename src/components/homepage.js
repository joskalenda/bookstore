/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { renderBook } from '../redux/books/book';

const Homepage = () => {
  const books = useSelector((e) => e.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renderBook());
  }, [dispatch]);
  if (!books) {
    return <div>Not Book was found</div>;
  }
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
