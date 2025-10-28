import { prisma } from "@/lib/db";

export const getAllCars = async () => {
  const cars = await prisma.car.findMany();
  return cars;
};
