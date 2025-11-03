import { ICar } from "@/types/car";
import Link from "next/link";
import PrimaryButton from "../common/PrimaryButton";
import { formatNumber } from "@/utils/formatNumber";

const CarInfo = ({ car }: { car: ICar }) => {
  return (
    <>
      <div className="bg-white text-black rounded-md p-6 flex flex-col h-full justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h1 className="text-xl md:text-2xl font-medium">{car.name}</h1>
            <p className="text-sm text-gray-500"> Reviewer</p>
          </div>
          <div>
            <span className="text-lg font-medium text-red-500">Love</span>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-base md:text-lg text-gray-500 leading-7 font-light">
            NISMO has become the embodiment of Nissan outstanding performance,
            inspired by the most unforgiving proving ground, the inspired by the
            most unforgiving proving
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500 text-sm md:text-base">
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <h1>Type Car</h1>
              <p className="font-medium">{car.type}</p>
            </div>
            <div className="flex justify-between">
              <h1>Capacity</h1>
              <p className="font-medium">{car.capacity}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1>Fuel</h1>
              <p className="font-medium">{car.fuel}</p>
            </div>
            <div className="flex justify-between">
              <h1>Engine</h1>
              <p className="font-medium">{car.gearbox}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex  md:flex-row justify-between items-center gap-4">
          <p className="text-xl  md:text-2xl font-medium">
            {formatNumber(car.price)} $
          </p>
          <Link href={`/rent/${car.id}`}>
            <PrimaryButton>Rent Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
