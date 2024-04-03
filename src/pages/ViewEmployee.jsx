import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import {
  deleteEmp,
  getAllUser,
  searchEmployee,
} from "../service/EmployeeService";
import Swal from "sweetalert2";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

import { MdDelete } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState([
    {
      name: "",
      email: "",
      password: "",
      salary: "",
      role: "",
      city: "",
      department: "",
    },
  ]);

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    fetchAllEmployees();
  }, []);

  const fetchAllEmployees = () => {
    getAllUser()
      .then((res) => {
        console.log(res); // Log the response data
        setEmployee(res); // Update state with the response data
      })
      .catch((error) => {
        console.error("Error fetching all users:", error); // Log any errors
      });
  };

  const deleteProduct = (id) => {
    deleteEmp(id)
      .then((res) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted",
              text: "successfully deleted..",
              icon: "success",
            });
          }
        });

        //refetch
        getAllUser().then((res) => {
          setEmployee(res);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handler = (event) => {
    navigate("/add");
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      searchEmployee(searchQuery)
        .then((res) => {
          console.log(res);
          setSearchResults(res);
        })
        .catch((error) => {
          console.error("Error searching employees:", error);
        });
    } else {
      fetchAllEmployees();
      setSearchResults([]);
    }
  };

  return (
    <>
      <Header />

      <div
        className="w-full "
        style={{
          height: "700px",
          background: "#335c67",
        }}
      >
        <div className="text-3xl shadow-2xl h-20  p-26 flex justify-center items-center font-sans font-bold ">
          <h2
            className="mt-10 mb-9"
            style={{
              color: "#001427",
            }}
          >
            All Employee List{" "}
          </h2>
        </div>

        {/* Add and filter */}

        <div
          className="box flex justify-around h-12 rounded-md"
          style={{
            width: 750,
          }}
        >
          {/* add bottn */}
          <button
            type="button"
            onClick={handler}
            class=" ml-10 pt-1 m-2 focus:outline-none text-white bg-blue-700 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            <div className="flex ml-30 ">
              {" "}
              <IoPersonAddSharp className="text-center mt-1" /> Add
            </div>
          </button>

          <div
            className="box2    w-96 flex justify-between align-middle "
            style={{
              boxSizing: "border-box",
            }}
          >
            <div
              className="py-1"
              style={{
                width: 200,
              }}
            >
              <input
                className="border-none  ml-4 p-2 rounded-lg shadow-md  w-full"
                type="search"
                placeholder="Search Employee "
                style={{ width: 380 }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              // className="text-2xl flex rounded-lg shadow-md  justify-center pt-3 ml-10  bg-blue-800 "
              className=" mr-20 mt-1 flex justify-center p-2 focus:outline-none text-white bg-blue-700 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              style={{ width: 130, marginBottom: 1 }}
              onClick={handleSearch}
            >
              Search{<MdPersonSearch className=" text-lg" />}
            </button>
          </div>
        </div>
        {/* end of add and filter */}

        <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 pt-30 mt-20">
          <table class="w-full table-fixed  ">
            <thead>
              <tr class="bg-gray-100">
                <th class="w-40 py-4 px-5 text-left text-gray-600 font-bold uppercase">
                  S.NO.
                </th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Name
                </th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Email
                </th>

                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Role
                </th>

                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  city
                </th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  <div className=" flex justify-center ">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              {/* Render search results or all employees */}
              {(searchQuery.trim() !== "" ? searchResults : employee).map(
                (emp, num) => (
                  <tr key={emp.id}>
                    {" "}
                    {/* Add key here */}
                    <td className="py-4 px-5 border-b border-gray-200">
                      {" "}
                      {num + 1}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {" "}
                      {emp.name}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {" "}
                      {emp.email}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {" "}
                      {emp.role}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {" "}
                      {emp.city}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200 flex justify-evenly">
                      <Link
                        to={"/edit/" + emp.id}
                        className="px-5 py-4 text-white bg-blue-700 shadow rounded-xl text-lg mr-2"
                      >
                        <BiEdit />
                      </Link>
                      <button
                        onClick={() => deleteProduct(emp.id)}
                        className="bg-red-700 text-white py-4 px-5 text-lg rounded-xl "
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                )
              )}

              {/* 
              {employee.map((emp, num) => (
                <tr>
                  <td class="py-4 px-5 border-b border-gray-200"> {num + 1}</td>
                  <td class="py-4 px-6 border-b border-gray-200">
                    {" "}
                    {emp.name}
                  </td>

                  <td class="py-4 px-6 border-b border-gray-200">
                    {" "}
                    {emp.email}
                  </td>
                  <td class="py-4 px-6 border-b border-gray-200">
                    {" "}
                    {emp.role}
                  </td>
                  <td class="py-4 px-6 border-b border-gray-200">
                    {" "}
                    {emp.city}
                  </td>

                  <td class="py-4 px-6 border-b border-gray-200 flex justify-evenly">
                    <Link
                      to={"/edit/" + emp.id}
                      className="px-5 py-4 text-white bg-blue-700 shadow rounded-xl text-lg mr-2"
                    >
                      <BiEdit />
                    </Link>

                    <button
                      onClick={() => deleteProduct(emp.id)}
                      className="bg-red-700 text-white py-4 px-5 text-lg rounded-xl "
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
 */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom-0 ">
        <Footer />
      </div>
    </>
  );
};

export default ViewEmployee;
