import * as yup from "yup";

export const bookSchema = yup.object().shape({
  name: yup.string().min(1).max(50).required(),
  author: yup.string().min(1).max(10).required(),
  release: yup.string().min(2).max(4).required(),
  price: yup.number().integer().typeError("Price is missing").required(),
});
