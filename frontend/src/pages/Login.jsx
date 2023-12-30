
const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh] ">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-2xl font-bold">Login in to your account</h1>
        <input type="text" placeholder="Username" className="outline-none px-3 py-1 w-full"/>
        <input type="password" placeholder="Password" className="outline-none px-3 py-1 w-full"/>
        <button className="bg-black text-white px-3 py-1 rounded-md">Login</button>
      </div>
    </div>
  );
}

export default Login