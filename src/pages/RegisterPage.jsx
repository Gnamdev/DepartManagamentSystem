import Footer from "../components/Footer";
import Header from "../components/Header";
import bgImage from "../assets/img12.avif";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../service/EmployeeService";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    role: "",
    city: "",
    department: "",
  });

  const nav = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState("");

  const [error, setErrors] = useState({
    errors: {},
    isError: false,
  });

  // const [errors, setErrors] = useState({});

  //  handelChange

  const handelChange = (event, property) => {
    const value = setData({ ...data, [property]: event.target.value });
    console.log(data);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (error.isError) {
      setRegistrationStatus("Form data is not blank");
    }

    //data validate

    //call server api for sending data

    signUp(data)
      .then((response) => {
        console.log(response.data);

        setRegistrationStatus("User registered successfully");

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: " Registered successfully !",
          showConfirmButton: false,
          timer: 1500,
        });
        setData({
          name: "",
          email: "",
          password: "",
          salary: "",
          role: "",
          city: "",
          department: "",
        });

        nav("/login");
      })
      .catch((error) => {
        console.log(error);
        setErrors({
          errors: { error },
          isError: true,
        });

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Field Not be empty !",
        });
      });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "70%",
        }}
        className=" flex justify-center align-middle "
      >
        {/* for funny */}

        <div
          className="border py-20 w-1/2 flex justify-center align-middle"
          style={{
            height: "108%",
          }}
        >
          <div
            class="max-w-md  w-1.5  relative flex flex-col p-4 rounded-md text-black bg-white border px-10 py-10 "
            style={{
              height: "100%",
            }}
          >
            <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
              Welcome <span class="text-[#7747ff]">Register Here !</span>
            </div>

            <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
              please provide correct details .
            </div>

            {/* {registrationStatus && (
              <div className="text-green-500 text-center mb-4">
                {registrationStatus}
              </div>
            )} */}

            <form onSubmit={submitForm} class="flex flex-col gap-3">
              {/* for name */}

              <div class="block relative">
                <label
                  for="name"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  onChange={(e) => handelChange(e, "name")}
                  value={data.name}
                  id="name"
                  name="name"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>

              {/* for email */}

              <div class="block relative">
                <label
                  for="email"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  onChange={(e) => handelChange(e, "email")}
                  value={data.email}
                  id="email"
                  name="email"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
                />
              </div>

              {/* for password */}

              <div class="block relative">
                <label
                  for="password"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => handelChange(e, "password")}
                  value={data.password}
                  id="password"
                  name="password"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
                />
              </div>

              {/* for salary */}

              <div class="block relative">
                <label
                  for="salary"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  onChange={(e) => handelChange(e, "salary")}
                  value={data.salary}
                  name="salary"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
                />
              </div>

              {/* for role */}

              <div class="block relative">
                <label
                  for="password"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  onChange={(e) => handelChange(e, "role")}
                  value={data.role}
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
                />
              </div>

              {/* for city */}

              <div class="block relative">
                <label
                  for="city"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  onChange={(e) => handelChange(e, "city")}
                  value={data.city}
                  name="city"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
                />
              </div>

              {/* for department */}

              <div class="block relative">
                <label
                  for="department"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  DepartMent
                </label>
                <input
                  type="text"
                  id="department"
                  onChange={(e) => handelChange(e, "department")}
                  value={data.department}
                  name="department"
                  class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
                />
              </div>

              {/* for gender

              <div>
                <label
                  for="gender"
                  class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Gender
                </label>

                <div className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 flex justify-start">
                  <div className="mr-10">
                    <label className="text-gray-600 cursor-text text-sm mr-4">
                      {" "}
                      Male
                    </label>
                    <input
                      type="radio"
                      id="city"
                      value="male"
                      checked={gender === "male"}
                      name="gender"
                      onChange={(e) => handelChange(e, "gender")}
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 cursor-text text-sm mr-4">
                      {" "}
                      Female
                    </label>
                    <input
                      type="radio"
                      id="city"
                      value="female"
                      checked={gender === "female"}
                      name="gender"
                      onChange={(e) => handelChange(e, "gender")}
                    />
                  </div>
                </div>
              </div> */}

              {/* <div>
                <a class="text-sm text-[#7747ff]" href="#">
                  Forgot your password?
                </a>
              </div> */}

              <div class="text-sm text-center mt-[1.6rem]">
                Already have an account ?{" "}
                <NavLink className="text-sm text-[#7747ff]" to="/login">
                  please Login
                </NavLink>
              </div>

              <button
                type="submit"
                onChange
                class="bg-[#7747ff] w-max  mt-3  m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
