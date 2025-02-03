import axios from "axios";

// export const createBook = async ({ name, author, release, price }) => {
//   const res = await fetch("http://localhost:3000/book/create-book", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, author, price, release }),
//   });

//   const data = await res.json();
//   return data;
// };

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
