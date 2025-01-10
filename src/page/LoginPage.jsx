import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidation } from "../validation/fromValid";
import { useContext } from "react";
import { AuthContext } from "../contex";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { loginValidation } from "../../validation/validationSchema";

function LoginPage() {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result);
  
        // Extract last login and email
        const lastLoginAt = result.user?.metadata?.lastLoginAt;
        const email = result.email;
  
        const userInfo = {
          lastLoginAt, // Fixed typo
          email,
        };
  
        // Send user info to the server
        fetch(`http://localhost:5000/users`, {
          method: "PATCH", // Corrected HTTP method
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo), // Convert userInfo to JSON string
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Database Response:", data);
            // Optional: Show toast for success
          })
          .catch((err) => {
            console.error("Failed to update user in database:", err);
            // Optional: Show toast for error
          });
  
        // Redirect after successful login
        navigate("/");
      })
      .catch((err) => {
        console.error("Login Error:", err);
  
        // Show toast message for login error
        toast.error("Login failed. Please check your credentials.");
      });
  };
  
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="mb-3">
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between">
          <span className="block w-full border-t border-gray-300"></span>
          <span className="mx-2 text-sm font-medium text-gray-500">OR</span>
          <span className="block w-full border-t border-gray-300"></span>
        </div>

        {/* Google Login Button */}
        {/* <button className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
          Login with Google
        </button> */}

        {/* Register Link */}
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
