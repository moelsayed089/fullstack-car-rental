"use client";

import CarCard from "./CarCard";
import Link from "next/link";
import { ICar } from "@/types/car";

export default function ClientCarList({
  cars,
  totalPages,
}: {
  cars: ICar[];
  totalPages: number;
}) {
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

      <div className="flex justify-center gap-3 mb-10">
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
}
