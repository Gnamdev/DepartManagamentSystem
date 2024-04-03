import { myAxios } from "./Helper";

export const signUp = (employee) => {
  return myAxios
    .post("/register", employee)
    .then((response) => response.data)
    .catch((error) => {
      throw error; // Optionally handle errors here
    });
};

export const login = (employee) => {
  return myAxios
    .post("/login", employee)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

//get all user

export const getAllUser = () => {
  return myAxios
    .get("/emp/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

//get id by user
export const getIdByUser = (id) => {
  return myAxios
    .get("/emp/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

// for deleting

export const deleteEmp = (id) => {
  return myAxios
    .delete("/emp/" + id)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

//updating

//
export const updatingEmp = (data, id) => {
  return myAxios
    .put(`/emp/${id}`, data) // Use backticks (`) instead of single quotes ('')
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const searchEmployee = (key) => {
  return myAxios
    .get("/emp/search/" + key)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};
