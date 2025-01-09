import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { schema } from "../validation/fromValid";

function Update() {
  const { id } = useParams(); // Get the coffee ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [coffee, setCoffee] = useState(null);

  // Fetch coffee data by ID
  useEffect(() => {
    fetch(`http://localhost:5000/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffee(data); // Set fetched data
        setLoading(false); // Stop loading indicator
      })
      .catch((error) => {
        console.error("Error fetching coffee:", error);
        setLoading(false); // Stop loading on error
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: coffee, // Dynamically set default values
  });

  // Update Coffee in Backend
  const onSubmit = (updatedData) => {
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/"); // Redirect to home after successful update
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
      });
  };

  // If coffee is still loading, show loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-5 flex items-center justify-center mt-12">
      <div className="bg-[#F5F4F1] shadow-md rounded-lg p-8 w-full max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-600 hover:text-gray-800 flex items-center mb-4"
        >
          <span className="mr-2 text-[20px]">←</span> Back to home
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Update Coffee</h2>
        <p className="text-gray-600 text-center mb-6">
          Please update the coffee details below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            {/* Coffee Name */}
            <div>
              <label htmlFor="coffeeName" className="block text-gray-700 text-sm mb-2">
                Coffee Name
              </label>
              <input
                {...register("coffeeName")}
                id="coffeeName"
                name="coffeeName"
                defaultValue={coffee?.coffeeName}
                type="text"
                placeholder="Enter coffee name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.coffeeName && (
                <span className="text-red-400">{errors.coffeeName.message}</span>
              )}
            </div>
            {/* Chef */}
            <div>
              <label htmlFor="chef" className="block text-gray-700 text-sm mb-2">
                Chef
              </label>
              <input
                {...register("chef")}
                id="chef"
                name="chef"
                defaultValue={coffee?.chef}
                type="text"
                placeholder="Enter coffee chef"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.chef && <span className="text-red-400">{errors.chef.message}</span>}
            </div>
            {/* Supplier */}
            <div>
              <label htmlFor="supplier" className="block text-gray-700 text-sm mb-2">
                Supplier
              </label>
              <input
                {...register("supplier")}
                id="supplier"
                name="supplier"
                defaultValue={coffee?.supplier}
                type="text"
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.supplier && (
                <span className="text-red-400">{errors.supplier.message}</span>
              )}
            </div>
            {/* Taste */}
            <div>
              <label htmlFor="taste" className="block text-gray-700 text-sm mb-2">
                Taste
              </label>
              <input
                {...register("taste")}
                id="taste"
                name="taste"
                defaultValue={coffee?.taste}
                type="text"
                placeholder="Enter coffee taste"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.taste && <span className="text-red-400">{errors.taste.message}</span>}
            </div>
            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-gray-700 text-sm mb-2">
                Category
              </label>
              <input
                {...register("category")}
                id="category"
                name="category"
                defaultValue={coffee?.category}
                type="text"
                placeholder="Enter coffee category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.category && (
                <span className="text-red-400">{errors.category.message}</span>
              )}
            </div>
            {/* Details */}
            <div>
              <label htmlFor="details" className="block text-gray-700 text-sm mb-2">
                Details
              </label>
              <input
                {...register("details")}
                id="details"
                name="details"
                defaultValue={coffee?.details}
                type="text"
                placeholder="Enter coffee details"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.details && (
                <span className="text-red-400">{errors.details.message}</span>
              )}
            </div>
            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-gray-700 text-sm mb-2">
                Price
              </label>
              <input
                {...register("price")}
                id="price"
                name="price"
                defaultValue={coffee?.price}
                type="number"
                placeholder="Enter coffee price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.price && <span className="text-red-400">{errors.price.message}</span>}
            </div>
            {/* Photo */}
            <div className="col-span-2">
              <label htmlFor="photo" className="block text-gray-700 text-sm mb-2">
                Photo
              </label>
              <input
                {...register("photo")}
                id="photo"
                name="photo"
                defaultValue={coffee?.photo}
                type="url"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.photo && <span className="text-red-400">{errors.photo.message}</span>}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
