import reactLogo from "../assets/react.svg";
export default function Navbar() {
  return (
    <header>
      <nav className="w-full px-6 py-4 bg-[#21222a] flex items-center space-x-3 shadow-lg">
        <img src={reactLogo} alt="react logo" />
        <span className="text-2xl text-[#61dafb] font-[Inter] font-bold">
          ReactFacts
        </span>
      </nav>
    </header>
  );
}
