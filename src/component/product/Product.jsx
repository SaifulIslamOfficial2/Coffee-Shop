/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing React Icons
import { BsCupHot } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = () => {
  const [coffees, setCoffees] = useState([]);

  // data fetch kora..
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  // delete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const newData = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(newData);
            if (data.deletedCount > 0) {
              // Check if deletion was successful
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-6 sm:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 mt-8">--- Sip & Savor ---</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-brown-600">
          Our Popular Coffees
        </h2>

        <div className="flex justify-center mt-4">
          <Link
            to="/AddCoffeeForm"
            className="flex items-center gap-2 bg-[#E3B577] text-white px-4 py-2 rounded shadow-md hover:bg-slate-400 transition duration-300"
          >
            Add Coffee <BsCupHot />
          </Link>
        </div>
      </div>

      {/* Coffees Grid or Empty State */}
      {coffees.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-[#F5F4F1] rounded-lg shadow-lg flex flex-col sm:flex-row items-center p-6 gap-6"
            >
              {/* Coffee Image */}
              <div className="flex-shrink-0">
                <img
                  src={coffee.photo}
                  alt={coffee.name}
                  className="w-32 h-32 object-contain rounded"
                />
              </div>

              {/* Coffee Info */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {coffee.coffeeName}
                </h3>
                <p className="text-gray-500">Chef: {coffee.chef}</p>
                <p className="text-gray-500">Supplier: {coffee.supplier}</p>
                <p className="text-lg font-bold text-gray-700">
                  Price: {coffee.price} ৳
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2">
                <button
                  className="bg-[#D2B48C] text-white p-2 rounded shadow hover:bg-yellow-500 flex items-center justify-center"
                  title="View"
                >
                  <FaEye />
                </button>
                <Link
                  to={`/Update/${coffee._id}`}
                  className="bg-[#3C393B] text-white p-2 rounded shadow hover:bg-gray-400 flex items-center justify-center"
                  title="Edit"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="bg-red-400 text-white p-2 rounded shadow hover:bg-red-500 flex items-center justify-center"
                  title="Delete"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-semibold">
            No Coffees Available
          </p>
          <p className="text-sm text-gray-500">
            Add a new coffee to see it listed here.
          </p>
          <Link
            to="/AddCoffeeForm"
            className="mt-4 inline-block bg-[#E3B577] text-white px-6 py-2 rounded shadow-md hover:bg-slate-400 transition duration-300"
          >
            Add Coffee
          </Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default Product;
