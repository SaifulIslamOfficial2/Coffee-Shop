/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router";
import { registerValidation } from "../validation/fromValid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../contex"; // Correctly importing AuthContext
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  // Correctly using UseAuth to get createUser function
  const { CreateUser } = useContext(AuthContext);

  // Form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });


  // submit data for register 
 
const onSubmit = async (data) => {
  CreateUser(data.email, data.password)
    .then((result) => {
      console.log(result);

      const formData = {
        name: data.name,
        email: data.email,
      };

      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed typo here
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      })
        .then((res) => res.json())
        .then((responseData) => {
          console.log(responseData); // Verify server response
          toast.success('Registration successful!'); // Toastify success message
        })
        .catch((error) => {
          toast.error('Error registering user!'); // Toastify error message
        });

      navigate("/"); // Redirect after successful registration
    })
    .catch((err) => {
      console.error(err);
      toast.error('Error creating user!'); // Toastify error message
    });

  console.log(data);
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name?.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email?.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password?.message}</span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
