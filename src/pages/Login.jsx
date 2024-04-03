import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImage from "../assets/img12.avif";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../service/EmployeeService";
import Swal from "sweetalert2";
import { doLogin, getCurrentEmp, isLogin } from "../auth";
import { data } from "autoprefixer";

const Login = () => {
  const [loginEmp, setLoginEmp] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  // handle change

  const handleChange = (event, field) => {
    setLoginEmp({
      ...loginEmp,
      [field]: event.target.value,
    });
  };

  //for submit handler

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(loginEmp);

    // validate

    if (loginEmp.email.trim() == "" || loginEmp.password.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "UserName and password is required ",
      });
      return;
    }

    login(loginEmp)
      .then((res) => {
        console.log(res);

        //    const data = { email: loginEmp.email }; // Only save the email
        doLogin(res, () => {
          console.log("login save in localStorage..success");

          nav("/");
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully..",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Envalid Username and Password",
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <>
      <Header />

      {/* login page */}

      <div
        className="flex justify-center align-middle w-full max-h-max pt-40 pb-40  "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white border px-10 py-10">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to{" "}
            <span class="text-[#7747ff]">Department information system</span>
          </div>

          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Login to your account
          </div>

          <form onSubmit={onSubmit} class="flex flex-col gap-3">
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                value={loginEmp.email}
                onChange={(e) => handleChange(e, "email")}
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>

            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginEmp.password}
                onChange={(e) => handleChange(e, "password")}
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 "
              />
            </div>

            <div>
              <a class="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>

          <div class="text-sm text-center mt-[1.6rem]">
            Don’t have an account yet?{" "}
            <NavLink className="text-sm text-[#7747ff]" to="/register">
              Sign up for free!
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
