import Image from "next/image";
import Link from "next/link";
import { formatNumber } from "@/utils/formatNumber";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ICar } from "@/types/car";

const CarCard = ({ car }: { car: ICar }) => (
  <div className="border-2 bg-white rounded-md p-3">
    <Link href={`/car/${car.id}`}>
      <div className="flex justify-between  mb-3">
        <div className="flex flex-col mb-2">
          <p className="font-semibold text-black  tracking-wide">{car.name}</p>
          <p className="text-md text-gray-400">{car.type}</p>
        </div>
        <p className="text-red-500">like</p>
      </div>
      <div className="w-full mb-5 mt-5 relative ">
        <Image
          src={car.images[0]}
          width={700}
          height={200}
          alt={car.name}
          className="rounded-md mb-3 object-cover p-5"
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-linear-to-t from-white/50 to-transparent blur-[px]">
          {" "}
        </div>
      </div>
      <div className="flex justify-between mt-2 mb-5 text-gray-400 font-medium">
        <p className="flex items-center gap-2">
          <i
            className="pi pi-users text-gray-400"
            style={{ fontSize: "20px" }}
          ></i>
          {car.fuel}
        </p>
        <p className="flex items-center gap-2">
          <i
            className="pi pi-users text-gray-400"
            style={{ fontSize: "20px" }}
          ></i>

          {car.gearbox}
        </p>

        <p className="flex items-center gap-2">
          <i
            className="pi pi-users text-gray-400"
            style={{ fontSize: "20px" }}
          ></i>
          {car.capacity}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg text-black font-semibold">
          {formatNumber(car.price)} $
        </p>
        <Link href={`/rent/${car.id}`}>
          <PrimaryButton>Rent Now</PrimaryButton>
        </Link>
      </div>
    </Link>
  </div>
);

export default CarCard;
