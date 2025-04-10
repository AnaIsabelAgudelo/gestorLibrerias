const API_URL = '/api/books';

export const getBooks = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};
