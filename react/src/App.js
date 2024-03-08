import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Components/Login";
import PublicRoutes from "./Routes/PublicRoutes";
import { ToastContainer } from 'react-toastify';
import Signup from './Components/Singup';
import PrivateRoutes from "./Routes/PrivetRoutes";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index
            element={<Signup />}>
          </Route>
          <Route path="/login" index
            element={<Login />}>
          </Route>
          </Route>
          
          <Route path="/home" element={<PrivateRoutes/>}>
          <Route index
            element={<Home />}>
          </Route>
          </Route>         

          </Routes>
      <ToastContainer />
    </BrowserRouter>



    </div>
  );
}

export default App;
