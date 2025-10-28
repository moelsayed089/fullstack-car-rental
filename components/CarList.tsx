import { getAllCars } from "@/actions/car.action";
import Image from "next/image";
import { Button } from "primereact/button";

const CarList = async () => {
  const cars = await getAllCars();
  return (
    <div className="container mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 h-50 ">
      {cars?.map((car) => (
        <div
          key={car.id}
          className="border-2 rounded-xl border-gray-700 shadow-sm p-5 hover:shadow-md "
        >
          <div className="flex justify-between  mb-3">
            <div className="flex flex-col mb-2">
              <p className="font-medium tracking-wide">{car.name}</p>
              <p className="text-md text-gray-400">{car.type}</p>
            </div>
            <p className="text-red-500">like</p>
          </div>
          <div className="w-full mb-5 mt-5 ">
            <Image
              src={car.images[0]}
              width={700}
              height={200}
              alt={car.name}
              className="rounded-md mb-3 bg-gray-600/30 p-5"
            />
          </div>
          <div className="flex justify-between mt-2 mb-5">
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
            <p>{car.price} $</p>
            <Button>Rent Now</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
