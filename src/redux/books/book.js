// import { useSelector } from 'react-redux';
// import styles from './book.module.css';

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

export const booksReducer = (state = initialState, action) => {
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

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,

});
