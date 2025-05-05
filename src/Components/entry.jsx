//import mountfujiimg from "../images/mount fuji.jpg";
const entry = (props) => {
  return (
    <div className="flex items-center pl-8 pt-8 w-[1000px]">
      <div className="bg-red-600 rounded-lg min-w-[100px] min-h-[180px] overflow-hidden">
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4">
        <ul>
          <li className="mb-2">
            {props.country + " "}
            <span className="hover:underline transition text-gray-400 cursor-pointer">
              View on Google Maps
            </span>
          </li>

          <h1 className="text-2xl font-bold mb-4">{props.title}</h1>

          <li className="font-medium mb-2">{props.date}</li>

          <p className="text-lg">{props.text}</p>
        </ul>
      </div>
    </div>
  );
};
export default entry;
