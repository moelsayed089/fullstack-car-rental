import { InputText } from "primereact/inputtext";
import Icon from "../Icon";

const SearchBar = () => {
  return (
    <div className="md:rounded-pill">
      <div className="flex bg-gray-300  items-center gap-2 md:gap-5 w-full py-2 px-3 border border-content-dimmed rounded-[10px] ">
        <Icon name="search" />
        <InputText
          type="text"
          placeholder="Search something here..."
          className="w-full text-gray-900 text-sm md:text-base outline-none shadow-none border-none focus:border-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default SearchBar;
