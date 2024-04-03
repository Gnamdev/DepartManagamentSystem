import bannerImage from "../assets/img1.avif";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Add Employee",
        "Update Employee",
        "Delete Employee",
        "View ALL Employee",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hello EveryOne</h3>
          <h1 className="text-5xl font-bold"></h1>
          <h2 className="text-3xl ">
            You can <span className="font-bold " ref={el}></span>
          </h2>
          <p className="text-blue-700 text-4xl font-bold">
            NOW MANAGE EMPLOYEES EFFECTIVELY WITH MORE EASY FROM ANYWHERE
          </p>

          {/* <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-youtube"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div> */}
          <br />

          <NavLink
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            to="/login"
          >
            Get Start
          </NavLink>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
