import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="md:px-14 font-Montserrat">
      <div className="md:h-[250px] mx-auto w-[90%] md:w-full py-5 md:py-0 h-auto bg-[#fff] shadow-2xl md:mt-20 mt-10 flex flex-col justify-center items-center md:px-28 px-5 text-center rounded-2xl">
        <h1 className="text-5xl font-bold mb-5 uppercase">Hello Foodies !</h1>
        <p className="text-lg mb-5">
          Fooddyyy is a place that you can find various food recipes. You can
          find our popular food recipes and specially vegitarian recipes. And
          also find Italian, American, Thai and Japanese food recipes. Just
          click the image. Then you will see the instructions.
        </p>
        <h1 className="bg-[#284b63] text-white font-medium py-2 px-4 rounded-full flex items-center gap-3">
          Find food recipes using below categories{" "}
          <FaRegArrowAltCircleDown className="hidden md:flex" />
        </h1>
      </div>
      <div className="md:mt-20 my-14 md:my-0">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
