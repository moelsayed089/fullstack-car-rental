import { prisma } from "@/lib/db";

export const getAllCars = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const [cars, total] = await Promise.all([
    prisma.car.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.car.count(),
  ]);

  return {
    cars,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

export const getCarById = async (id: string) => {
  const car = await prisma.car.findUnique({ where: { id } });
  return car;
};
