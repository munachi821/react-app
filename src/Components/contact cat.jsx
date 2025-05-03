const Contact = (name, phoneNumber, email) => {
  return (
    <div className="w-55 bg-sky-400 p-2 rounded-lg">
      <div className="w-full h-40 bg-black rounded-md"></div>
      <p className="mt-2 text-xl font-medium text-white">{name}</p>

      <div className="mt-4 space-y-2 text-white">
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
