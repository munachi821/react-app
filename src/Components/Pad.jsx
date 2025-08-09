export default function Pad(props) {
  return (
    <button
      className={`bg-[${props.color}] ${props.ison ? "on" : undefined}`}
    ></button>
  );
}
