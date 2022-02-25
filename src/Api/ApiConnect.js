const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = '/app/0gYYVFjoAKcpIVkCAE2m/books';

export const BookFromApi = async () => {
  const response = await fetch(`${BASE_URL}${APP_ID}`, {
    headers: {},
  });
  const dataBook = JSON.parse(await response.text() || '[]');
  return dataBook;
};

export const createBook = async ({ itemId, title, category }) => {
  // const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const body = JSON.stringify({
    item_id: itemId,
    title,
    category,
  });
  const response = await fetch(`${BASE_URL}${APP_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.text();
};

export const deleteBook = async (itemId) => {
  const body = JSON.stringify({
    item_id: itemId,
  });
  const resp = await fetch(`${BASE_URL}${APP_ID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return resp.text();
};
