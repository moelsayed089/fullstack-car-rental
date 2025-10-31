import React from "react";
interface Link {
  legal: string[];
}

const links: Link = {
  legal: ["Privacy & Policy", "Terms & Conditions"],
};
const FooterCopyWrite = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  justify-between gap-4 mt-5 mb-2  text-gray-500 text-sm sm:text-base ">
        <div>
          <p className="text-center">
            © {currentYear} MORENT. All rights reserved.
          </p>
        </div>

        <div className="flex gap-10 justify-between ">
          {links.legal.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterCopyWrite;
