import Icon from "../Icon";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const IconNav = () => {
  return (
    <div className=" flex items-center ">
      <Icon name="heart" />
      <div className="ml-2 bg-gray-950 flex items-center gap-3 px-3 py-2 rounded-full hover:cursor-pointer">
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
