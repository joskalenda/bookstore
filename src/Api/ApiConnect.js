const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '/app/***/books';

export const BookFromApi = async () => {
  const response = await fetch(`${BASE_URL}${APP_ID}`, {
    headers: {},
  });
  const dataBook = JSON.parse(await response.text() || '[]');
  return dataBook;
};

