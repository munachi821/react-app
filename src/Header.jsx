import reactLogo from "./assets/react.svg";
export default function Header() {
  return (
    <nav className="bg-red-600 flex justify-between px-4 items-center">
      <img src={reactLogo} width="50px" alt="react logo" />
      <ul className="text-lg text-white flex space-x-3">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
