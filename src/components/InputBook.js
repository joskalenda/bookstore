import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));

    setTitle('');
    setGenre('');
  };

  // const removeBookFromStore = () => {
  //   dispatch(removeBook(id));
  // };

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeGenre = (e) => setGenre(e.target.value);

  const form = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore} style={form}>
        <input
          className="input-text"
          type="text"
          placeholder="Add Book Title..."
          name="title"
          value={title}
          onChange={onChangeTitle}
        />
        <select
          name="genre"
          value={genre}
          onChange={onChangeGenre}
        >
          <option hidden value="">-- Category --</option>
          <option value="Action">Music</option>
          <option value="Magic">Magic</option>
          <option value="Physic">Physics</option>
          <option value="Sciences">Sciences</option>
          <option value="Business">Business</option>
        </select>
        <button type="submit" className="input-submit">Add Book</button>
      </form>

    </div>

  );
};

export default InputBook;
