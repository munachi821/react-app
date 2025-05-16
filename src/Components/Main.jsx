import React from "react";
const main = () => {
  const [ingredients, setIngredients] = React.useState([]);

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
    <div className="w-fit mx-auto mt-[50px] text-[14px]">
      <form action={addIngrigients} className="flex items-center">
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          autoComplete="off"
          className="w-[400px] h-[38px] border border-[#D1D5DB] outline-none rounded-sm pl-2 mr-3 shadow-sm"
        />
        <button className="bg-[#141413] pt-[9px] pr-[17px] pb-[9px] pl-[17px] rounded-lg text-[#FAFAF8] w-[158px] h-[38px]">
          + Add ingredient
        </button>
      </form>
      <ul>{items}</ul>
    </div>
  );
};

export default main;
