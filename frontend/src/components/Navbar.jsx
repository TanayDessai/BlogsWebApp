import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-xl font-extrabold">
        <Link to="/">Blogs</Link>
      </h1>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <h3>Login</h3>
        <h3>Register</h3>
      </div>
    </div>
  );
}

export default Navbar