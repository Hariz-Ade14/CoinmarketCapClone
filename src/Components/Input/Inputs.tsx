type searchProps = {
  type: "text";
  customStyles?: string;
  placeholder: string;
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Search = ({
  type,
  customStyles,
  placeholder,
  icon1,
  icon2,
  searchValue,
  onChange,
}: searchProps) => {
  const baseStyle =
    "rounded-xl bg-gray-200 outline-none font-semibold px-3 py-0";

  return (
    <div className="bg-gray-200 rounded-[1] py-1 px-3 flex items-center justify-between w-[300px]">
      <div className="flex items-center">
        <div>{icon1}</div>
        <input
          type={type}
          placeholder={placeholder}
          className={`${customStyles} ${baseStyle}`}
          value={searchValue}
          onChange={onChange}
        />
      </div>

      <div>{icon2}</div>
    </div>
  );
};

export { Search };
