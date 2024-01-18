import { useEffect, useState } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const American = () => {
  const [american, setAmerican] = useState([]);

  const getAmerican = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=907cabdda3164fb29e5f7593b3db1121&number=20&cuisine=american`
    );
    const data = await response.json();
    setAmerican(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getAmerican();
  }, []);

  return (
    <div className="px-14 font-Montserrat">
      <Categories />
      <h1 className="text-center text-4xl my-10 font-bold">American Recipes</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {american.map((recipe) => {
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

export default American;
