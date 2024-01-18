import { MdFastfood } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import { CgMenuHotdog } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Popular Recipes", link: "/popular" },
    { name: "Vegetarian recipes", link: "/vegge" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="font-Montserrat">
      <nav className=" h-16 bg-[#284b63] text-white m-4 px-10 flex justify-between items-center rounded-full ">
        <div className="flex gap-2 justify-center items-center text-2xl font-bold">
          <MdFastfood className=" text-[#ff70a6] text-3xl " />
          <Link to="/">
            <h1>Fooddyyy</h1>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-3xl md:hidden text-white"
          key={Links.name}
        >
          {open ? <RxCrossCircled /> : <CgMenuHotdog />}
        </div>

        <ul
          className={`text-white md:bg-none text-[16px] bg-[#284b63] md:gap-7 md:flex py-7 md:py-0 absolute md:static md:items-center md:z-auto z-[1] text-center right-5 rounded-3xl w-[89%] md:w-auto md:mt-0 md:pr-0 pr-5 ${
            open ? " top-[80px]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="hover:text-[#ff70a6] hover:font-semibold cursor-pointer mb-5 md:mb-0 uppercase">
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                spy={true}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <a href="https://spoonacular.com/food-api">
            <div className="flex w-[60%] md:w-auto justify-center items-center gap-3 py-2 px-4 mx-auto md:mx-0 bg-[#ff70a6] rounded-full">
              <button>Contact Us</button>
              <SiMinutemailer className="text-lg" />
            </div>
          </a>
        </ul>

        {/* TODO: Old ul */}
        {/* <ul className="flex gap-10 text-md uppercase">
          <Link to="/">
            {" "}
            <li className="hover:text-[#ff70a6] hover:font-semibold cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/popular">
            {" "}
            <li className="hover:text-[#ff70a6] hover:font-semibold cursor-pointer">
              Popular Recipes
            </li>
          </Link>
          <Link to="/vegge">
            {" "}
            <li className="hover:text-[#ff70a6] hover:font-semibold cursor-pointer">
              Vegetarian recipes
            </li>
          </Link>
        </ul> */}
        {/* <a href="https://spoonacular.com/food-api">
          <div className="flex justify-center items-center gap-3 py-2 px-4 bg-[#ff70a6] rounded-full">
            <button>Contact Us</button>
            <SiMinutemailer className="text-lg" />
          </div>
        </a> */}
      </nav>
    </div>
  );
};

export default Navbar;
