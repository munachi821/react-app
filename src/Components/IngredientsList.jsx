export default function IngredientsList(props) {
  const items = props.ingredient.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Ingredients on hand:</h1>
      <ul>{items}</ul>
      {props.ingredient.length > 3 && (
        <div className="bg-[#F0EFEB] flex justify-between p-8 rounded-xl items-center absolute bottom-0 left-0 right-0 h-fit">
          <div>
            <h3 className="text-lg font-medium">Ready for a recipe?</h3>
            <p className="text-[#6B7280]">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={props.getRecipe}
            className="bg-[#D17557] text-white rounded-lg cursor-pointer h-fit py~-2 px-4"
          >
            Get a recipe
          </button>
        </div>
      )}
    </div>
  );
}
