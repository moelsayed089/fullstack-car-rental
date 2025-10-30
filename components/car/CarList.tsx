import { getAllCars } from "@/actions/car.action";
import { formatNumber } from "@/utils/formatNumber";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

const CarList = async () => {
  const cars = await getAllCars();

  if (!cars) return <div className="p-6 text-center">Car not found</div>;
  return (
    <>
      <h1 className="text-sm ml-1 font-medium text-gray-400 mt-6">
        Popular Cars
      </h1>
      <div className=" mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10  ">
        {cars?.map((car) => (
          <div key={car.id} className="border-2 bg-white rounded-md p-5 ">
            <Link href={`/car/${car.id}`}>
              <div className="flex justify-between  mb-3">
                <div className="flex flex-col mb-2">
                  <p className="font-semibold text-black  tracking-wide">
                    {car.name}
                  </p>
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
                  className="rounded-md mb-3  p-5"
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
                  <Button className="bg-blue-500 px-5 py-2 rounded-md">
                    Rent Now
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarList;
