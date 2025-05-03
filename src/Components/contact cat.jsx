const Contact = (props) => {
  return (
    <div className="w-55 bg-sky-400 p-2 rounded-lg">
      <div className="w-full h-40 bg-black rounded-md"></div>
      <p className="mt-2 text-xl font-medium text-white">{props.name}</p>

      <div className="mt-4 space-y-2 text-white">
        <p>{props.phoneNumber}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contact;
