import mountfujiimg from "../images/mount fuji.jpg";
const entry = () => {
  return (
    <div className="flex items-center pl-8 pt-8 w-[1000px]">
      <div className="bg-red-600 rounded-lg w-[208px] h-[180px] overflow-hidden">
        <img
          src={mountfujiimg}
          alt="mount fuji"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4">
        <ul>
          <li className="mb-2">
            JAPAN{" "}
            <span className="hover:underline transition text-gray-400 cursor-pointer">
              View on Google Maps
            </span>
          </li>

          <h1 className="text-2xl font-bold mb-4">Mount Fuji</h1>

          <li className="font-medium mb-2">12 jan, 2025 - 24 jan, 2025</li>

          <p className="text-lg">
            Mount Fuji is the tallest mountain in japan, standing at 3,776
            meters(12,380 feet), Mount Fuji is the single most popular tourist
            site in Japan, for both japanese and foreign tourists
          </p>
        </ul>
      </div>
    </div>
  );
};
export default entry;
