import styles from './book.module.css';
import InputBook from '../../components/InputBook';

const Book = () => {
  const books = [
    {
      id: 1,
      title: 'Ulsan',
      author: 'Thomas Hunk',
      genre: 'Music',
      completed: 10,
    },
    {
      title: 'Mucks',
      author: 'King Robert',
      genre: 'Science Fiction',
      completed: 8,
      id: 1,
    },
    {
      title: 'Koran',
      author: 'Bullet smoke',
      genre: 'Magic',
      completed: 8,
      id: 1,
    },
  ].map((book) => (
    <div className={styles.listBook} key={book.id} completed={book.completed}>
      <div className={styles.divOne}>
        <span className={styles.genre}>{book.genre}</span>
        <h2 className={styles.title}>
          {book.title}
          {' '}
        </h2>
        <span className={styles.author}>{book.author}</span>
      </div>
      <div>
        <p>50% progress</p>
      </div>
      <div className={styles.divOne}>
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter 3</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  ));
  const para = {
    marginTop: '30px',

  };

  return (
    <div>
      <div style={para}>{books}</div>
      <InputBook />
    </div>

  );
};

export default Book;
