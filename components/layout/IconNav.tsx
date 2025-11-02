// import Icon from "../Icon";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const IconNav = () => {
  return (
    <div className=" ">
      {/* <Icon name="heart" /> */}
      <div className=" bg-gray-100 flex items-center gap-3 px-3 py-2 rounded-md hover:cursor-pointer">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default IconNav;
