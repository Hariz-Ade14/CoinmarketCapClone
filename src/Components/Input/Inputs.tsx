type searchProps = {
  type: "text";
  customStyles?: string;
  placeholder: string;
  icon1?: JSX.Element;
  icon2?: JSX.Element;
};
const Search = ({
  type,
  customStyles,
  placeholder,
  icon1,
  icon2,
}: searchProps) => {
  const baseStyle =
    "rounded-xl bg-gray-200 outline-none text-xl font-semibold px-3 py-0";

  return (
    <div className="bg-gray-200 rounded-xl py-4 px-3 flex items-center justify-between w-[400px]">
      <div className="flex items-center">
        <div>{icon1}</div>
        <input
          type={type}
          placeholder={placeholder}
          className={`${customStyles} ${baseStyle}`}
        />
      </div>

      <div>{icon2}</div>
    </div>
  );
};

export { Search };
