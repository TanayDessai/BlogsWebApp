import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import scene from "../assets/scene.jpg"
import Comment from "../components/Comment"

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
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@tanaydesai</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>13:45</p>
          </div>
        </div>
        <img src={scene} alt="" className="w-full mt-8 mx-auto" />
        <p className="mt-8 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatibus, voluptatem, asperiores, quidem dolorum quae
          exercitationem voluptas quia quos doloremque fugiat. Quam
          voluptatibus, voluptatem, asperiores, quidem dolorum quae
          exercitationem voluptas quia quos doloremque fugiat.
        </p>
        <div className="flex justify-center space-x-4 mt-8 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="font-semibold mt-6 mb-4">Comments</h3>
          <Comment />
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="px-4 py-2 mt-4 md:mt-0 md:w-[80%] outline-none"
          />
          <button className="bg-black text-sm text-white px-4 py-2 mt-4 md:mt-0 md:w-[20%]">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails