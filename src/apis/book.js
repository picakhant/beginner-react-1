import axios from "axios";

export const createBook = async (name, author, release, price, img) => {
  try {
    const res = await axios.post("http://localhost:3000/book/create-book", {
      name,
      author,
      release,
      price,
      img,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getBooks = async () => {
  try {
    const res = await axios.get("http://localhost:3000/book");

    const { book } = res.data;

    return book;
  } catch (error) {
    throw error;
  }
};
