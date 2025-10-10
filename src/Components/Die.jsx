const Die = (props) => {
  return (
    <button
      className={`size-14 rounded-md shadow-md text-2xl font-bold ${
        props.isHeld ? "bg-[#59E391]" : "bg-white"
      } cursor-pointer`}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
};
export default Die;
