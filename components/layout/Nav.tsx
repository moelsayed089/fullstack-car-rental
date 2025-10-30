import IconNav from "./IconNav";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div className="container mt-2">
      <div className="flex flex-col md:flex-row gap-3 items-center p-5 border bg-white rounded-md shadow-md border-gray-300/70">
        <div className="flex gap-3 justify-between items-center w-full md:w-auto">
          <Logo />
          <div className="flex gap-3 items-center md:hidden">
            <IconNav />
          </div>
        </div>

        <div className="flex-1 w-full order-2 md:order-0">
          <SearchBar />
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <IconNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
