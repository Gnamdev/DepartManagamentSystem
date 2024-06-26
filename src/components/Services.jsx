import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center ">Services</h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <div className="text-3xl flex justify-center ">
              <MdAddCircle />
            </div>

            <h1 className="text-4xl">Create Employee</h1>
            <p>
              This service allows administrators or authorized users to add a
              new employee to the system. Users input relevant information such
              as the employee's name, contact details, job title, department,
              start date, and any other required details. Upon submission, the
              system validates the information provided and creates a new
              employee record in the database. An autogenerated employee ID may
              also be assigned for unique identification purposes.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <div className="text-3xl flex justify-center ">
              <RiDeleteBin6Line />
            </div>

            <h1 className="text-4xl">Delete Employee</h1>
            <p>
              This service enables administrators or authorized users to remove
              an employee from the system. Users typically specify the employee
              to be deleted by providing their unique identifier, such as
              employee ID or name. Upon confirmation, the system permanently
              removes the employee record from the database. This action may
              trigger additional processes such as updating payroll records or
              reassigning tasks associated with the deleted employee.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <div className="text-3xl flex justify-center ">
              <GrUpdate />
            </div>

            <h1 className="text-4xl">Update User </h1>
            <p>
              This service allows administrators or authorized users to modify
              existing employee information. Users can update various fields
              such as contact details, job title, department, or any other
              relevant information. The system validates the changes made and
              updates the employee record accordingly in the database.
              Additionally, audit trails or version control mechanisms may be
              implemented to track changes and maintain data integrity.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>

          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <div className="text-3xl flex justify-center ">
              <GrView />
            </div>
            <h1 className="text-4xl">View all EMployee </h1>
            <p>
              This service provides a comprehensive view of all employees
              currently registered in the system. Users can access a list or
              directory of employees, which may include details such as names,
              job titles, departments, and contact information. The system may
              offer filtering or sorting options to customize the display based
              on specific criteria. Additionally, pagination or search
              functionality may be incorporated to navigate large datasets
              efficiently. This feature allows users to quickly retrieve
              employee information and facilitates tasks such as team
              assignments, communication, and reporting.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
