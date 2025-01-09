import * as yup from "yup";

export const schema = yup.object({
  coffeeName: yup.string().required("Coffee Name is required"),
  chef: yup.string().required("Chef name is required"),
  supplier: yup.string().required("Supplier is required"),
  taste: yup.string().required("Taste is required"),
  category: yup.string().required("Category is required"),
  details: yup.string().required("Details are required"),
  price: yup.string().required(),
  photo: yup.string().required("Photo URL is required").url("Photo must be a valid URL"),
}).required();