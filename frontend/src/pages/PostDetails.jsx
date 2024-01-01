import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 Uses of Artificial Intelligence in Day to Day Life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@tanaydesai</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>13:45</p>
          </div>
        </div>
        <img src="https://pngtree.com/freebackground/aerial-3d-rendering-design-surreal-mountain-vistas-from-high-altitude_13315109.html" alt="" className="w-full h-[400px] object-cover mt-4"/>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails