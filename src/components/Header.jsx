import { useEffect, useState } from "react";
import Register from "../pages/RegisterPage";
import { NavLink, useNavigate } from "react-router-dom";
import { getCurrentEmp, isLogin, doLogout } from "../auth";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import Swal from "sweetalert2";

const Header = () => {
  const [brandName, setBrandName] = useState("DepartMent Information System");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About",
      link: "/",
      id: 2,
    },

    // {
    //   title: "Register",
    //   link: "/register",
    //   id: 3,
    // },
  ]);

  const [loginButton, setLoginButton] = useState({
    title: "Login ",
    link: "/login",
  });

  const [actionButton2, setActionButton2] = useState({
    title: "Logout",
    link: "/logout",
  });

  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  let naviget = useNavigate();

  useEffect(() => {
    setLogin(isLogin());
    setCurrentUser(getCurrentEmp());
  }, [login]);

  const handleLogout = () => {
    //for message
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out !",
          text: "Logged out successfully !.",
          icon: "success",
        });
      }
    });

    doLogout(() => {
      setLogin(false);
      setCurrentUser(undefined);
    });

    naviget("/");
  };

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}

          {/* brand Name */}
          <h1 className="text-[#7747ff] text-2xl font-bold mb-2 ">
            <NavLink to="/">{brandName}</NavLink>
          </h1>
        </div>

        <div className="w-2/4 ">
          <div className="space-x-6 ml-0 ">
            {/* menu links */}

            {menuLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.link}
                className="hover:text-orange-600"
              >
                {link.title}
              </NavLink>
            ))}

            {login ? "" : <NavLink to="/register">Register</NavLink>}
            {login ? <NavLink to="/show">View Employee</NavLink> : ""}

            {/* 
         

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
          </div>
        </div>
        <div>
          {/* buttons */}

          {login ? (
            <>
              <div className="flex  justify-around ">
                <span className="flex justify-center items-center mr-3 border p-3 shadow-sm rounded-xl text-sm bg-blend-saturation ">
                  {<FaCircleUser />} {currentUser.employee.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-orange-500 shadow rounded-full text-1xl mr-2"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 mr-2 bg-orange-500 shadow rounded-full text-1xl "
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
