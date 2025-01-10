/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Data fetch
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // Delete function
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
        fetch(`http://localhost:5000/user/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newUser = users.filter((user) => user._id !== id);
              setUsers(newUser);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-24 bg-slate-200 p-4">
      <h1 className="text-center text-xl font-semibold mb-4">Users List</h1>

      {/* Table for larger screens */}
      <table className="table hidden md:table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center font-medium text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Card-style for smaller screens */}
      <div className="block md:hidden">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={user._id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p className="font-semibold">Number: {index + 1}</p>
              <p className="font-semibold">Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <button
                onClick={() => handleDelete(user._id)}
                className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center font-medium text-gray-500">
            No data available
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#D1A054] mt-3 text-black font-medium px-1 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-slate-500 hover:border-2 hover:text-black transition duration-300"
        >
          <span className="mr-2 text-[20px]">←</span> Back to home
        </button>
      </div>
    </div>
  );
}

export default Users;
