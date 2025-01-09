import banner from "../../assets/image/banner/3.png"

function Banner() {
  return (
    <div className="bg-black">
    <div className="relative">
      {/* Background Image */}
      <img
        src={banner} // Replace with your image URL
        alt="Coffee Banner"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-end ">
        <div className=" text-white px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="  text-3xl  font-bold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className=" text-[14px] mb-6">
            It`s coffee time - Sip & Relax - Relaxation in every sip! Get the nostalgia back! 
            Your companion <br /> of every moment! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="bg-[#D1A054] text-black font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-transparent hover:border hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner