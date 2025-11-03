import { ICar } from "@/types/car";
import Image from "next/image";
import pattern from "../../assets/image/Group 427320628.png";

const CarImage = ({ car }: { car: ICar }) => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col ">
      <div className="relative bg-blue-600 rounded-md mb-5 h-full overflow-hidden">
        <h1 className="text-xl md:text-2xl text-white  p-5 leading-relaxed relative z-10">
          Sports car with the best <br /> design and acceleration
        </h1>
        <div className="flex items-center justify-center">
          <Image
            width={400}
            height={300}
            className=" rounded-md h-full object-center relative mt-14 z-10 "
            src={car.images[0]}
            alt="Main car"
          />
        </div>

        <Image
          width={500}
          height={400}
          className="absolute inset-0 w-full h-full object-cover "
          src={pattern}
          alt="Pattern overlay"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {car.images.slice(0, 3).map((img, index) => (
          <Image
            key={index}
            width={200}
            height={200}
            className="w-full h-full md:h-[110px] object-center rounded-sm bg-gray-100 p-4"
            src={img}
            alt={`Car ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarImage;
