import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Home() {
  const navigate = useNavigate()
  const handlelogOUT = () => {
    const removeToken = localStorage.clear();

    navigate('/')
    if (!removeToken) {
      toast.success('logout Successfull', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }









  return (
    <>
      <div>
        <><h1>hiii from home</h1></>
        <button onClick={handlelogOUT}>logOUt</button>
      </div>
      <ToastContainer />

    </>

  )
}

export default Home;
