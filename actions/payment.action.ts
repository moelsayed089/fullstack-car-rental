"use server";

import { prisma } from "@/lib/db";
import { PaymentData } from "@/types/payment";

export const createPayment = async (data: PaymentData) => {
  try {
    const billingInfo = await prisma.billingInfo.upsert({
      where: { userId: data.userId },
      update: {
        name: data.billing.name,
        phone: data.billing.phone,
        address: data.billing.address,
        city: data.billing.city,
      },
      create: {
        name: data.billing.name,
        phone: data.billing.phone,
        address: data.billing.address,
        city: data.billing.city,
        userId: data.userId,
      },
    });

    const car = await prisma.car.findUnique({
      where: { id: data.rental.carId },
    });

    if (!car) {
      throw new Error("Car not found");
    }

    const days =
      Math.ceil(
        (data.rental.dropOffDate.getTime() - data.rental.pickUpDate.getTime()) /
          (1000 * 60 * 60 * 24)
      ) || 1;

    const totalPrice = car.price * days;

    const rental = await prisma.rental.create({
      data: {
        pickUp: data.rental.pickUpDate,
        dropOff: data.rental.dropOffDate,
        location: `${data.rental.pickUpLocation} → ${data.rental.dropOffLocation}`,
        total: totalPrice,
        userId: data.userId,
        carId: data.rental.carId,
      },
    });

    const payment = await prisma.payment.create({
      data: {
        method: data.payment.method,
        amount: totalPrice,
        rentalId: rental.id,
        status: "pending",
      },
    });

    return { success: true, billingInfo, rental, payment };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to create payment" };
  }
};
