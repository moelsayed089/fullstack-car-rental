"use client";

import CarCard from "./CarCard";
import { ICar } from "@/types/car";

export default function ClientCarList({ cars }: { cars: ICar[] }) {
  return (
    <>
      <h1 className="text-sm ml-1 font-medium text-gray-400 mt-6">
        Popular Cars
      </h1>

      <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}
