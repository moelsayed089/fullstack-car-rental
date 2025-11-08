"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatNumber } from "@/utils/formatNumber";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ICar } from "@/types/car";

const CarCard = ({ car }: { car: ICar }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/car/${car.id}`);
  };

  return (
    <div
      className="border-2 bg-white rounded-md p-3 cursor-pointer hover:shadow-md transition"
      onClick={handleCardClick}
    >
      <div className="flex justify-between mb-3">
        <div className="flex flex-col mb-2">
          <p className="font-semibold text-black tracking-wide">{car.name}</p>
          <p className="text-md text-gray-400">{car.type}</p>
        </div>
        <p className="text-red-500">like</p>
      </div>

      <div className="w-full mb-5 mt-5 relative">
        <Image
          src={car.images?.[0]}
          width={700}
          height={200}
          alt={car.name}
          className="rounded-md mb-3 h-[110px] object-center  p-5"
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
            className="pi pi-cog text-gray-400"
            style={{ fontSize: "20px" }}
          ></i>
          {car.gearbox}
        </p>
        <p className="flex items-center gap-2">
          <i
            className="pi pi-user text-gray-400"
            style={{ fontSize: "20px" }}
          ></i>
          {car.capacity}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg text-black font-semibold">
          {formatNumber(car.price)} $
        </p>
        <Link href={`/rent/${car.id}`} onClick={(e) => e.stopPropagation()}>
          <PrimaryButton>Rent Now</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
