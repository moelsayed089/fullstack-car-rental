import { getAllCars } from "@/actions/car.action";
import CarCard from "./CarCard";
import Link from "next/link";
import { ICar } from "@/types/car";

const CarList = async ({ page = 1 }: { page?: number }) => {
  const { cars, totalPages } = await getAllCars(page, 4);

  if (!cars.length)
    return (
      <div className="p-6 text-center text-gray-500">No cars available</div>
    );

  return (
    <>
      <h1 className="text-sm ml-1 font-medium text-gray-400 mt-6">
        Popular Cars
      </h1>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
        {cars?.map((car: ICar) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="flex justify-center gap-3  mb-10">
        {[...Array(totalPages)].map((_, i) => (
          <Link
            key={i}
            href={`?page=${i + 1}`}
            scroll={false}
            className="px-3 py-1 bg-gray-700 border rounded hover:bg-gray-600"
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CarList;
