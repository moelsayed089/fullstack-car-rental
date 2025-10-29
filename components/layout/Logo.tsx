import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="w-[108px] md:w-fit">
      <Image
        src={"/logo.png"}
        width={1200}
        height={1500}
        alt="logo image"
        className="w-[120px] "
      />
    </Link>
  );
}

export default Logo;
