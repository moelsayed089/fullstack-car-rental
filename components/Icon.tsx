import settingsIcon from "../assets/icons/settings.svg";
import heartIcon from "../assets/icons/heart.svg";
import notificationIcon from "../assets/icons/notification.svg";
import search from "../assets/icons/search-normal.svg";
import filter from "../assets/icons/filter.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import swap from "../assets/icons/Swap.svg";
import Image from "next/image";

type IconProps = {
  name:
    | "settings"
    | "heart"
    | "notification"
    | "search"
    | "filter"
    | "menu"
    | "close"
    | "swap";
  size?: number;
  className?: string;
};

const iconMap: Record<IconProps["name"], string> = {
  settings: settingsIcon,
  heart: heartIcon,
  notification: notificationIcon,
  search: search,
  filter: filter,
  menu: menu,
  close: close,
  swap: swap,
};

const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  const iconSrc = iconMap[name];

  if (!iconSrc) {
    console.warn(`Icon "${name}" is not defined in iconMap.`);
    return null;
  }

  return (
    <Image
      src={iconSrc}
      alt={`${name} icon`}
      className={`w-[15px] md:w-[21px] ${className}`}
    />
  );
};

export default Icon;
