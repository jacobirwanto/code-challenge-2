import Logo from "../assets/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pb-8 pt-4  px-16 lg:px-24">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center mb-4 lg:mb-0 lg:items-start">
          <a href="/">
            <img src={Logo} alt="SNSV Logo" className="w-16 h-16" />
          </a>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} SNSV. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <a href="https://www.facebook.com/ASUS">
            <FaFacebook size={25} />
          </a>
          <a href="https://twitter.com/ASUS">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.instagram.com/asus/">
            <FaInstagram size={25} />
          </a>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none flex items-center"
          onClick={handleBackToTop}
        >
          <FaArrowUp className="mr-2" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
