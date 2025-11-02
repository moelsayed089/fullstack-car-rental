import IconNav from "./IconNav";
import Logo from "./Logo";
// import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div className="fixed top-0 z-50  w-full">
      <div className="flex flex-col md:flex-row gap-3 items-center p-5 border bg-white   border-gray-300/70">
        <div className="flex  w-full items-center justify-between">
          <Logo />
          <IconNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
