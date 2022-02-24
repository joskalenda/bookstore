import { userSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Homepage = () => {
  const books = userSelector((e) => e.books);
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
