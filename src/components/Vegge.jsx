// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Vegge = () => {
  const [vegge, setVegge] = useState([]);

  const getVegge = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=907cabdda3164fb29e5f7593b3db1121&number=20&tags=vegetarian`
    );
    const data = await response.json();

    setVegge(data.recipes);
    console.log(data.recipes);
  };

  useEffect(() => {
    getVegge();
  }, []);

  return (
    <div className="px-14 font-Montserrat">
      <h1 className="text-center text-4xl my-10 font-bold">
        Vegetarian Recipes
      </h1>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {vegge.map((recipe) => {
          return (
            <Link to={"/recipe/" + recipe.id} key={recipe.id}>
              <div
                key={recipe.id}
                className="w-[300px] h-auto rounded-lg bg-white shadow-lg text-center pb-5"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className=" rounded-t-lg "
                />
                <p className="my-5 text-lg font-semibold px-2">
                  {recipe.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Vegge;
