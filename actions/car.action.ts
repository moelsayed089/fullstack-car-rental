"use server";
import { prisma } from "@/lib/db";
import { ReviewValue } from "@/schema/ReviewSchema";

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

// create New Review

export const createUserReview = async (
  data: ReviewValue,
  carId: string,
  userId: string
) => {
  return await prisma.review.create({
    data: {
      rating: data.rating,
      comment: data.comment,
      title: data.title,
      carId,
      userId,
      name: data.name,
    },
  });
};

export const getReviewsByCarId = async (carId: string) => {
  return await prisma.review.findMany({
    where: { carId },
    orderBy: { createdAt: "desc" },
  });
};
