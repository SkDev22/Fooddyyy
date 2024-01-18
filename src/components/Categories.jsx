import { FaPizzaSlice } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="px-14 font-Montserrat">
      <div className="md:flex flex flex-col md:flex-row md:flex-wrap justify-between items-center gap-5 md:mt-8 ">
        <Link to="/italian">
          <div className="w-[250px] h-[100px] flex justify-center items-center text-center gap-4 text-xl font-bold rounded-3xl bg-gradient-to-r from-[#ff70a6] to-[#284b63] hover:text-2xl text-white hover:font-bold cursor-pointer shadow-lg ">
            <FaPizzaSlice />
            <h1>Italian</h1>
          </div>
        </Link>
        <Link to="/american">
          <div className="w-[250px] h-[100px] flex justify-center items-center text-center gap-4 text-xl font-bold rounded-3xl bg-gradient-to-r from-[#ff70a6] to-[#284b63] hover:text-2xl text-white hover:font-bold cursor-pointer shadow-lg ">
            <GiHamburger />
            <h1>American</h1>
          </div>
        </Link>
        <Link to="/thai">
          <div className="w-[250px] h-[100px] flex justify-center items-center text-center gap-4 text-xl font-bold rounded-3xl bg-gradient-to-r from-[#ff70a6] to-[#284b63] hover:text-2xl text-white hover:font-bold cursor-pointer shadow-lg ">
            <GiNoodles />
            <h1>Thai</h1>
          </div>
        </Link>
        <Link to="/japanese">
          <div className="w-[250px] h-[100px] flex justify-center items-center text-center gap-4 text-xl font-bold rounded-3xl bg-gradient-to-r from-[#ff70a6] to-[#284b63] hover:text-2xl text-white hover:font-bold cursor-pointer shadow-lg ">
            <GiChopsticks />
            <h1>Japanese</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
