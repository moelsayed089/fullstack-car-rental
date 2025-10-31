import FooterCopyWrite from "./FooterCopyWrite";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <div className="bg-white p-6 ">
        <FooterLinks />
        <FooterCopyWrite />
      </div>
    </>
  );
};

export default Footer;
