//isLogin

import { json } from "react-router-dom";

export const isLogin = () => {
  let data = localStorage.getItem("data");

  if (data != null) return true;
  else return false;
};

//doLogin == set to localDB

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));

  next();
};

//doLogout

export const doLogout = (next) => {
  localStorage.removeItem("data");

  // next();
  next();
};

//get curuuent emp

export const getCurrentEmp = () => {
  if (isLogin()) return JSON.parse(localStorage.getItem("data"));
  else {
    return undefined;
  }
};

// get current emp

// export const getCurrentEmp = () => {
//   if (isLogin()) {
//     const storedData = JSON.parse(localStorage.getItem("employee")); // Retrieve data under the key
//     return storedData;
//   } else {
//     return undefined;
//   }
// };

// export const getCurrentEmp = () => {
//   if (isLogin()) {
//     const storedData = JSON.parse(localStorage.getItem("employee")); // Retrieve data under the key
//     return storedData;
//   } else {
//     return undefined;
//   }
// };
