import { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-screen text-gray-800 py-4 px-6 flex items-center justify-between z-50 shadow-lg transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <img
          style={{ borderRadius: "5px" }}
          src="./Logo1.png"
          alt="Bariflo Cybernetics Logo"
          className="w-12 h-12 md:w-16 md:h-16 ml-20"
        />
        {showNav ? (
          <IoCloseOutline
            className="text-4xl sm:hidden cursor-pointer"
            onClick={() => setShowNav(false)}
          />
        ) : (
          <IoMenuOutline
            className="text-4xl sm:hidden cursor-pointer"
            onClick={() => setShowNav(true)}
          />
        )}
        <ul className="hidden sm:flex space-x-6 lg:space-x-8 text-lg capitalize font-semibold mr-20">
          <Link
            to="what-we-do"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer"
          >
            What we do
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer"
          >
            News
          </Link>
          <Link
            to="ourteam"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer"
          >
            Our Team
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </nav>
      {showNav && (
        <ul className="fixed top-0 left-0 w-full h-full bg-white text-gray-800 flex flex-col items-center justify-center space-y-6 shadow-lg z-50 transition-transform duration-300">
          <IoCloseOutline
            className="text-5xl absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowNav(false)}
          />
          <Link
            to="what-we-do"
            smooth={true}
            duration={500}
            className="text-3xl font-bold hover:text-blue-500 cursor-pointer"
            onClick={() => setShowNav(false)}
          >
            What we do
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-3xl font-bold hover:text-blue-500 cursor-pointer"
            onClick={() => setShowNav(false)}
          >
            News
          </Link>
          <Link
            to="ourteam"
            smooth={true}
            duration={500}
            className="text-3xl font-bold hover:text-blue-500 cursor-pointer"
            onClick={() => setShowNav(false)}
          >
            Our Team
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-3xl font-bold hover:text-blue-500 cursor-pointer"
            onClick={() => setShowNav(false)}
          >
            Contact
          </Link>
        </ul>
      )}
    </>
  );
}

export default Header;
