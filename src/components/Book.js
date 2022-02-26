/* eslint-disable import/extensions */
/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import { AiOutlineLoading3Quarters as StatusBar } from 'react-icons/ai';
import { removeBook } from '../redux/books/book';
import styles from './book.module.css';

const Book = ({
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
    padding: '0',
    margin: '0',
  };
  return (
    <div>
      <div style={para}>
        <div className={styles.listBook}>
          <div className={styles.divOne1}>
            <span className={styles.genre}>{genre}</span>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.author}>{author}</span>
            <div className={styles.removeButton}>
              <button className={styles.btn} type="button">Comment |</button>
              <button className={styles.btn} type="button" onClick={removeBookFromStore}>Remove |</button>
              <button className={styles.btn} type="button">Edit</button>
            </div>
          </div>
          <div style={{
            display: 'flex', textAlign: 'center', alignItems: 'center', gap: '5px',
          }}
          >
            <StatusBar style={{ fontSize: '50px', color: '#379cf6' }} />
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{
                margin: '3px', color: '#000', fontSize: '16px', fontWeight: '900',
              }}
              >
                {completed}
                {' '}
                %
              </p>
              <p style={{ margin: '0' }}>completed</p>

            </p>
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
  completed: PropTypes.string.isRequired,
};

export default Book;
