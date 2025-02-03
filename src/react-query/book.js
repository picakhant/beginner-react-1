import { useMutation } from "@tanstack/react-query";
import { createBook } from "../apis/book";

export const useCreateBook = () => {
  return useMutation({
    mutationFn: ({ name, author, release, price, img }) =>
      createBook(name, author, release, price, img),
  });
};
