import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setrecipe] = useState("");

  async function getRecipe() {
    const recipieMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipieMarkdown);
    setrecipe(recipieMarkdown);
  }

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
        <IngredientsList getRecipe={getRecipe} ingredient={ingredients} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </div>
  );
};

export default Main;
