import logo from "../../assets/image/logo1.png"

function NavBar() {
  return (
    <header className=" z-10 w-full top-0 left-0 right-0 fixed bg-[#4b2a2a]">
        <div className="p-3 flex  justify-center ">
            <div className="flex gap-2 items-center">
                <img className=" w-8 h-8 object-cover" src={logo} alt="" />
                <h1 className="text-white font-semibold text-2xl">Espresso Emporium</h1>
            </div>
        </div>
    </header>
  )
}

export default NavBar
