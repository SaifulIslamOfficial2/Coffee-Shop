import { Link } from "react-router-dom";
import logo from "../../assets/image/logo1.png";

function NavBar() {
  return (
    <header className="z-10 w-full top-0 left-0 right-0 fixed bg-[#4b2a2a]">
      <div className="p-3 flex flex-wrap justify-between items-center">
        {/* Center: Logo and Title */}
        <div className="flex gap-2 items-center justify-center">
         <Link to={"/"}> <img className="w-8 h-8 object-cover" src={logo} alt="Logo" /></Link>
          <Link to={"/"}><h1 className="text-white font-semibold text-lg sm:text-2xl">
            
            Espresso Emporium
          </h1></Link>
        </div>

        {/* Right: Login and Users Buttons */}
        <div className="mt-2 sm:mt-0 flex gap-2">
          <Link
            to={"/Login"}
            className="bg-[#D1A054] text-black font-medium px-3 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-transparent hover:border hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Login
          </Link>
          <Link
            to={"/user"}
            className="bg-[#D1A054] text-black font-medium px-3 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-transparent hover:border hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Users
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
