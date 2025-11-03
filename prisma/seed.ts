import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cars = await prisma.car.createMany({
    data: [
      {
        name: "Koenigsegg",
        type: "Sport",
        price: 110,
        fuel: "Petrol",
        capacity: 2,
        gearbox: "Automatic",
        images: [
          "/uploads/car1.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "Nissan GT - R",
        type: "Sport",
        price: 250,
        fuel: "Petrol",
        capacity: 4,
        gearbox: "Manual",
        images: [
          "/uploads/car2.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "Rolls - Royce",
        type: "sedan",
        price: 96,
        fuel: "Petrol",
        capacity: 2,
        gearbox: "Automatic",
        images: [
          "/uploads/car3.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "All New Rush",
        type: "SUV",
        price: 75,
        fuel: "Petrol",
        capacity: 2,
        gearbox: "Manual",
        images: [
          "/uploads/car4.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "CR - V",
        type: "SUV",
        price: 84,
        fuel: "Petrol",
        capacity: 6,
        gearbox: "Manual",
        images: [
          "/uploads/car5.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "All New Terios",
        type: "SUV",
        price: 145,
        fuel: "Petrol",
        capacity: 6,
        gearbox: "Manual",
        images: [
          "/uploads/car6.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "MG ZX Exclusice",
        type: "Hatchback",
        price: 65,
        fuel: "Petrol",
        capacity: 4,
        gearbox: "Manual",
        images: [
          "/uploads/Car7.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
      {
        name: "New MG ZS",
        type: "SUV",
        price: 97,
        fuel: "Petrol",
        capacity: 6,
        gearbox: "Automatic",
        images: [
          "/uploads/Car8.png",
          "/uploads/descriptionOne.png",
          "/uploads/descriptionTwo.png",
        ],
      },
    ],
  });
  return cars;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
