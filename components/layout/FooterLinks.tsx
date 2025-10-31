import { Link } from "@/types/footerLinks";
import Logo from "./Logo";

const links: Link = {
  about: ["How it works", "Features", "Partnership", "Business Relation"],
  company: ["Events", "Blog", "Podcast", "Invite a friend"],
  socials: ["Discord", "Instagram", "Twitter", "Facebook"],
};
const FooterLinks = () => {
  return (
    <>
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-b border-gray-300  ">
        <div>
          <h1 className="text-2xl w-[200px] sm:text-3xl font-semibold pb-3 text-blue-700">
            <Logo />
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <div className="mb-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 md:mb-0">
            {Object.entries(links).map(([key, value]) => (
              <div key={key}>
                <h2 className="capitalize text-lg font-semibold mb-4 text-black">
                  {key}
                </h2>
                <ul>
                  {value.map((item: string) => (
                    <li key={item} className="mb-2">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-500  "
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterLinks;
