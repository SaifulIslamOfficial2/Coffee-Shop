import { Link } from "react-router-dom";
import banner from "../../assets/image/banner/3.png";

function Banner() {
  return (
   <div className="bg-black block">
  <div className="relative">
    {/* Background Image */}
    <img
      src={banner}
      alt="Coffee Banner"
      className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center sm:justify-end pt-20 sm:pt-10">
      <div className="text-white max-w-lg px-4 sm:px-6 md:px-8 lg:px-12 space-y-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          It’s coffee time - Sip & Relax. Relaxation in every sip! Get the nostalgia back! 
          Your companion of every moment! Enjoy the beautiful moments and make them memorable.
        </p>
       <Link to={"/articale"}> <button className="bg-[#D1A054] mt-4 text-black font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-transparent hover:border hover:text-white transition duration-300">
          Learn More
        </button></Link>
      </div>
    </div>
  </div>
</div>


  );
}

export default Banner;
