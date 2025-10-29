import Image from "next/image";
import image1 from "../../assets/image/BG.png";
import image2 from "../../assets/image/BG2.png";

const HeaderSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <div className="flex flex-col md:flex-row  gap-4 ">
            {/* banner image 1 */}
            <div className="relative w-full ">
              <h1 className="absolute text-xl md:text-2xl lg:text-3xl top-2 md:top-4 left-5 ">
                The Best Platform
                <br />
                for Car Rental
              </h1>

              <p className="absolute top-16 md:top-20 lg:top-24  left-5 text-sm md:text-md lg:text-lg  text-white/70 ">
                Ease of doing a car rental safely and
                <br />
                reliably. Of course at a low price.
              </p>

              <Image
                src={image1}
                width={570}
                height={600}
                alt="header image"
                className="bg-blue-600/80 rounded-md "
              />
            </div>
            {/* banner image 2 */}
            <div className="relative w-full hidden md:block ">
              <h1 className="absolute text-xl md:text-2xl lg:text-3xl top-2 md:top-4 left-5 ">
                Easy way to rent a
                <br />
                car at a low price
              </h1>

              <p className="absolute top-16 md:top-20 lg:top-24  left-5 text-sm md:text-md lg:text-lg  text-white/70 ">
                Providing cheap car rental services
                <br /> and safe and comfortable facilities.
              </p>

              <Image
                src={image2}
                width={600}
                height={600}
                alt="header image"
                className="bg-blue-600/80 rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
