import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blogs</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[70vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left ">Create an account</h1>
          <input
            type="text"
            placeholder="Enter your username"
            className="px-4 py-2 w-full border-2 border-black outline-none"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 w-full border-2 border-black outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 w-full border-2 border-black outline-none"
          />
          <button className="bg-black text-white w-full text-lg font-bold hover:bg-gray-500 hover:text-black px-4 py-4 rounded-lg">
            Register
          </button>
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register