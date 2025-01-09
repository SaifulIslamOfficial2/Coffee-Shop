/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing React Icons
import { BsCupHot } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const coffeesection = () => {
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
          <p className="text-sm text-gray-500">--- Sip & Savor ---</p>
          <h2 className="text-3xl font-bold text-brown-600">
            Our Popular coffees
          </h2>

          <div className="flex text-center justify-center">
            <div className=" flex text-center justify-center items-center gap-2 mt-2 bg-[#E3B577] w-[150px] h-[40px] rounded hover:bg-slate-400">
              <Link to="/AddCoffeeForm">Add Coffee</Link>
              <BsCupHot />
            </div>
          </div>
        </div>

        {/* coffees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-[#F5F4F1] space-y-2 w-[500px] h-[250px] rounded-lg shadow-lg flex flex-col sm:flex-row items-center p-6 gap-4"
            >
              {/* coffee Image */}
              <div className="flex-shrink-0">
                <img
                  src={coffee.photo}
                  alt={coffee.name}
                  className="w-32 h-32 object-contain rounded "
                />
              </div>

              {/* coffee Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-800 ">
                  {coffee.coffeeName}
                </h3>
                <p className="text-gray-500">Chef: {coffee.chef}</p>
                <p className="text-gray-500">supplier: {coffee.supplier}</p>
                <p className="text-lg font-bold text-gray-700">
                  {coffee.price}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 sm:flex-col sm:space-y-2 sm:space-x-0">
                <button
                  className="bg-[#D2B48C] text-white p-2 rounded shadow hover:bg-yellow-500 flex items-center justify-center"
                  title="View"
                >
                  <FaEye />
                </button>
                <Link
                  to={`/Update/${coffee._id}`} // Use coffee._id instead of _id
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
      </div>
    </div>
  );
};

export default coffeesection;
