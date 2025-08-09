import { useState } from "react";
const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setrecipeShown] = useState(false);

  function showRecipe() {
    setrecipeShown((prevShown) => !prevShown);
  }

  const items = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngrigients(formData) {
    const newIngredient = formData.get("ingredient");
    const radioInfo = formData.get("employmentStatus");
    console.log(radioInfo);
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  return (
    <div className="w-fit mx-auto mt-[50px] text-[14px] relative h-[80vh]">
      <form action={addIngrigients} className="flex items-center">
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          autoComplete="off"
          className="w-[400px] h-[38px] border border-[#D1D5DB] outline-none rounded-sm pl-2 mr-3 shadow-sm"
        />
        <button className="bg-[#141413] pt-[9px] pr-[17px] pb-[9px] pl-[17px] rounded-lg text-[#FAFAF8] w-[158px] h-[38px] cursor-pointer">
          + Add ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold my-4">Ingredients on hand:</h1>
          <ul>{items}</ul>
          {ingredients.length > 3 && (
            <div className="bg-[#F0EFEB] flex justify-between p-8 rounded-xl items-center absolute bottom-0 left-0 right-0 h-fit">
              <div>
                <h3 className="text-lg font-medium">Ready for a recipe?</h3>
                <p className="text-[#6B7280]">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                onClick={showRecipe}
                className="bg-[#D17557] text-white rounded-lg cursor-pointer h-fit py-2 px-4"
              >
                Get a recipe
              </button>
            </div>
          )}
        </div>
      )}
      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </div>
  );
};

export default Main;
