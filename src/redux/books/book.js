import { useSelector } from 'react-redux';
import styles from './book.module.css';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [
  {
    id: 1,
    title: 'Ulsan',
    author: 'Thomas Hunk',
    genre: 'Music',
    completed: 10,
  },
];

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        {
          id: 9,
          title: action.payload.title,
          author: action.payload.author,
          genre: action.payload.genre,
          completed: 90,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
// export default reducer;

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,

});

export const Book = () => {
  const books = useSelector((state) => {
    const { books } = state;
    console.log(books);

    // const dispatch = useDispatch();
    // const removeBookFromStore = () => {
    //   dispatch(removeBook());
    // };
    books.map((book) => (
      <div className={styles.listBook} key={book.id}>
        <div className={styles.divOne}>
          <span className={styles.genre}>{book.genre}</span>
          <h2 className={styles.title}>{book.title}</h2>
          <span className={styles.author}>{book.author}</span>
          <div className={styles.removeButton}>
            <button type="button">Comment</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div>
          <p>{book.completed}</p>
        </div>
        <div className={styles.divOne}>
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 3</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    ));
  });

  const para = {
    marginTop: '30px',

  };

  return (
    <div>
      <div style={para}>{books}</div>
      {/* <InputBook /> */}
    </div>

  );
};

// export default Book;
