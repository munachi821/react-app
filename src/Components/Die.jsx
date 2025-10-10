const Die = (props) => {
  return (
    <button
      className="size-14 rounded-md shadow-md text-2xl font-bold bg-white cursor-pointer"
      onClick={(e) => console.log(props.value)}
    >
      {props.value}
    </button>
  );
};
export default Die;
