import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserConext } from "../context/UserContext";

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserConext)
  const navigate = useNavigate()

  
    const handleLogin=async()=>{
      try{
        const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
        // console.log(res.data)
        setUser(res.data)
        navigate("/")
  
      }
      catch(err){
        setError(true)
        console.log(err)
  
      }try{
      const res = axios.post(URL+"/api/auth/login",{email,password})
      navigate("/")
      console.log(res.data)
    }
    catch(err){
      setError(true)
      console.log(err)
    }
  }
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blogs</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[70vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left ">Login in to your account
          </h1>
          <input
          onChange={(e)=>setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 w-full border-2 border-black outline-none"
          />
          <input
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 w-full border-2 border-black outline-none"
          />
          <button onClick={handleLogin} className="bg-black text-white w-full text-lg font-bold hover:bg-gray-500 hover:text-black px-4 py-4 rounded-lg">
            Login
          </button>
          {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login