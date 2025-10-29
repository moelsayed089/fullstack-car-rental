import Image from "next/image";
import image1 from "../../assets/image/BG.png";
import image2 from "../../assets/image/BG2.png";

const HeaderSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div>
          <div className="flex flex-col md:flex-row  gap-4 ">
            <div className="relative w-full ">
              <h1 className="text-2xl md:text-3xl font-normal absolute top-2 md:top-5 left-5 ">
                The Best Platform
                <br />
                for Car Rental
              </h1>

              <p className="absolute top-20 md:top-28 left-5 text-sm md:text-lg text-white/70 ">
                Ease of doing a car rental safely and
                <br />
                reliably. Of course at a low price.
              </p>

              <Image
                src={image1}
                width={600}
                height={600}
                alt="header image"
                className="bg-blue-600 rounded-md "
              />
            </div>
            <div className="relative w-full ">
              <h1 className="text-2xl md:text-3xl font-normal absolute top-2 md:top-5 left-5 ">
                Easy way to rent a
                <br />
                car at a low price
              </h1>

              <p className="absolute top-20 md:top-28 left-5 text-sm md:text-lg text-white/70 ">
                Providing cheap car rental services
                <br /> and safe and comfortable facilities.
              </p>

              <Image
                src={image2}
                width={600}
                height={600}
                alt="header image"
                className="bg-blue-600 rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
