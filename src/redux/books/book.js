/* eslint-disable react/jsx-key */
import { BookFromApi, createBook, deleteBook } from '../../Api/ApiConnect';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookStore/books/SET_ALL_BOOKS';

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: 'Topaz Jos',
          genre: action.payload.genre,
          completed: 90,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case SET_ALL_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const addBook = (payload) => async (dispatch) => {
  await createBook({
    itemId: payload.id,
    title: payload.title,
    category: payload.genre,
    author: 'Topaz Jos',
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const renderBook = () => async (dispatch) => {
  const books = await BookFromApi();
  // convert api data to array of objects
  const data = Object.entries(books).map(([itemId, [book]]) => ({
    id: itemId,
    title: book.title,
    genre: book.category,
    author: 'Topaz Jos',
  }));
  dispatch({
    type: SET_ALL_BOOKS,
    payload: data,
  });
};
