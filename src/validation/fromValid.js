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

// register******************* 
export const registerValidation = yup.object({
  name: yup.string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name cannot exceed 50 characters."),
  
  email: yup.string()
    .required("Email is required.")
    .email("Please enter a valid email address."),

  password: yup.string()
    .required("Password is required.")
    .min(4, "Password must be at least 8 characters."),
    // .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    // .matches(/[0-9]/, "Password must contain at least one number.")
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character."),

  confirmPassword: yup.string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password"), null], "Passwords must match."),
}).required();

// login***********************
export const loginValidation = yup.object({
 
  email: yup.string()
    .required("Email is required.")
    .email("Please enter a valid email address."),

  password: yup.string()
    .required("Password is required.")
    .min(4, "Password must be at least 8 characters.")
    // .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    // .matches(/[0-9]/, "Password must contain at least one number.")
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character."),
}).required();
