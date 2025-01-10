import { Link } from "react-router-dom";
import logo from "../../assets/image/logo1.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 p-8 border-t border-gray-300">
        <div className="container mx-auto px-4 flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center  ">
            {/* Espresso Emporium Section */}
            <div>
                <img className="w-12 h-" src={logo} alt="" />
              <h2 className="text-xl font-bold text-gray-900 mb-4">Espresso Emporium</h2>
              <p className="text-sm">
                Always ready to be your friend. Come & Contact with us to share your
                memorable moments, to share with your best companion.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Get In Touch Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-gray-500" />
                  <span>+88 01533 333 333</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-500" />
                  <span>info@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span>72, Wall Street, King Road, Dhaka</span>
                </li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Connect with Us</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-200"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="text-center w-full bg-[#4b2a2a]  text-sm p-4 text-gray-500">
        <p>Copyright © Espresso Emporium | All Rights Reserved by <Link to={"https://www.facebook.com/md.saiful.islam.104197"} className=" text-blue-600 hover:border-b font-semibold">SAIFUL ISLAM</Link></p>
      </div>
    </>
  );
};

export default Footer;
