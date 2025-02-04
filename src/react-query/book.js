import { useMutation, useQuery } from "@tanstack/react-query";
import { createBook, getBooks } from "../apis/book";

export const useCreateBook = () => {
  return useMutation({
    mutationFn: ({ name, author, release, price, img }) =>
      createBook(name, author, release, price, img),
  });
};

export const useGetBooks = () => {
  return useQuery({
    queryKey: ["get-books-from-db"],
    queryFn: () => getBooks(),
  });
};
