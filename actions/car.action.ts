"use server";
import { prisma } from "@/lib/db";
import { ReviewValue } from "@/schema/ReviewSchema";
import { ICar } from "@/types/car";

export const getAllCars = async () => {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return { cars };
};

export const getCarById = async (id: string) => {
  const car = await prisma.car.findUnique({ where: { id } });
  return car;
};

export const createCar = async (car: ICar) => {
  return await prisma.car.create({ data: car });
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
      imageUrl: data.imageUrl,
    },
  });
};

export const getReviewsByCarId = async (carId: string) => {
  return await prisma.review.findMany({
    where: { carId },
    orderBy: { createdAt: "desc" },
  });
};

export const deleteReview = async (id: string, userId: string) => {
  const review = await prisma.review.findUnique({ where: { id } });
  if (!review) throw new Error("Review not found");
  if (review.userId !== userId) throw new Error("Not authorized");

  return await prisma.review.delete({ where: { id } });
};
