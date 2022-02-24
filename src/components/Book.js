import PropTypes from 'prop-types';

import styles from './book.module.css';

export const Book = ({
  id,
  title,
  author,
  genre,
  completed,
}) => {
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };
  const para = {
    marginTop: '30px',
  };
  return (
    <div>
      <div style={para}>
        <div className={styles.listBook} key={id}>
          <div className={styles.divOne}>
            <span className={styles.genre}>{genre}</span>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.author}>{author}</span>
            <div className={styles.removeButton}>
              <button type="button">Comment</button>
              <button type="button" onClick={removeBookFromStore}>Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div>
            <p>{completed}</p>
          </div>
          <div className={styles.divOne}>
            <h3>CURRENT CHAPTER</h3>
            <p>Chapter 3</p>
            <button type="button">Update progress</button>
          </div>
        </div>
      </div>
    </div>

  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
