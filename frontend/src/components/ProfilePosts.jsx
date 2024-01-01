import scene from '../assets/scene.jpg'

const ProfilePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src={scene} alt="" className="h-full w-full object-cover" />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@tanaydesai</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>13:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          voluptatibus, voluptatem, asperiores, quidem dolorum quae
          exercitationem voluptas quia quos doloremque fugiat. Quam
          voluptatibus, voluptatem, asperiores, quidem dolorum quae
          exercitationem voluptas quia quos doloremque fugiat.
        </p>
      </div>
    </div>
  );
}

export default ProfilePosts