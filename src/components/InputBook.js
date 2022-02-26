/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as randId } from 'uuid';
import { addBook } from '../redux/books/book';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (!title || !genre) return;
    const newBook = {
      title,
      author: 'Topaz Jos',
      genre,
      id: randId(),
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));

    setTitle('');
    setGenre('');
  };

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeGenre = (e) => setGenre(e.target.value);

  const form = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
    gap: '20px',
  };
  return (
    <>
      <hr style={{
        width: '900px',
        margin: '30px auto',
        marginBottom: '10px',
        color: 'color: rgb(148, 148, 148)',
      }}
      />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        float: 'left',
        textAlign: 'left',
        flexDirection: 'column',
        marginLeft: '190px',
      }}
      >
        <h2 style={{
          transform: 'translateX(-21rem)',
          color: 'rgb(148, 148, 148)',
        }}
        >
          ADD NEW BOOK

        </h2>
        <form onSubmit={submitBookToStore} style={form}>
          <input
            className="input-text"
            style={{
              width: '350px',
              height: '15px',
              margin: '10px 20px 0 0',
              border: '1px solid lightgrey',
              padding: '14px',
              borderRadius: '4px',
            }}
            type="text"
            placeholder="Add Book Title..."
            name="title"
            value={title}
            onChange={onChangeTitle}
          />
          <select
            style={{
              width: '350px',
              height: '45px',
              margin: '10px 20px 0 0',
              border: '1px solid lightgrey',
              padding: '14px',
              borderRadius: '4px',
            }}
            name="genre"
            value={genre}
            onChange={onChangeGenre}
          >
            <option hidden value="">Select book category...</option>
            <option value="Action">Music</option>
            <option value="Magic">Magic</option>
            <option value="Physic">Physics</option>
            <option value="Sciences">Sciences</option>
            <option value="Business">Business</option>
          </select>
          <button
            type="submit"
            style={{
              width: '90px',
              height: '43px',
              color: '#fff',
              background: '#0290ff',
              margin: '10px 20px 0 0',
              border: '1px solid lightgrey',
              padding: '14px',
              borderRadius: '4px',
            }}
          >
            Add Book

          </button>
        </form>

      </div>

    </>

  );
};

export default InputBook;
