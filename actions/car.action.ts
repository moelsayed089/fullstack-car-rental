import { prisma } from "@/lib/db";

export const getAllCars = async () => {
  const cars = await prisma.car.findMany();
  return cars;
};

export const getCarById = async (id: string) => {
  const car = await prisma.car.findUnique({ where: { id } });
  return car;
};
