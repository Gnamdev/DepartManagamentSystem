import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import ViewEmployee from "./pages/ViewEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/show" element={<ViewEmployee />} />
          <Route path="/edit/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
