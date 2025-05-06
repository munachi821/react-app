const main = () => {
  return (
    <div className="w-fit mx-auto mt-[50px] text-[14px]">
      <form action="#" className="flex items-center">
        <input
          type="text"
          placeholder="e.g. oregano"
          className="w-[400px] h-[38px] border border-[#D1D5DB] outline-none rounded-sm pl-2 mr-3 shadow-sm"
        />
        <button className="bg-[#141413] pt-[9px] pr-[17px] pb-[9px] pl-[17px] rounded-lg text-[#FAFAF8] w-[158px] h-[38px]">
          + Add ingredient
        </button>
      </form>
    </div>
  );
};

export default main;
