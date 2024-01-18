import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  const getInfo = async () => {
    const info = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=907cabdda3164fb29e5f7593b3db1121`
    );
    const data = await info.json();
    setInfo(data);
    console.log(data);
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:px-28 px-5 font-Montserrat">
      <div className="flex justify-between flex-col md:flex-row items-start">
        <div className="flex-1">
          <h1 className="text-3xl font-bold my-5 text-center md:text-start">
            {" "}
            {info.title}
          </h1>
          <img className="rounded-lg" src={info.image} alt={info.title} />
        </div>
        <div className="flex-1 md:ml-28 ml-0">
          {/* <h1 className="text-xl font-bold mt-8 underline">Ingredients</h1> */}
          <h1 className="text-xl font-bold mt-8 underline">Information</h1>
          <p
            className="text-justify mt-5 mb-8"
            dangerouslySetInnerHTML={{ __html: info.summary }}
          ></p>
          <h1 className="text-xl font-bold mt-8 underline">Instructions</h1>
          <p
            className="my-5 text-justify"
            dangerouslySetInnerHTML={{ __html: info.instructions }}
          ></p>

          {/* <ul className="mt-5 mb-8 list-disc">
            {info.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
