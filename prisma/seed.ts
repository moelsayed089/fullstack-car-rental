import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const cars = await prisma.car.createMany({
    data: [
      {
        name: "Toyota Camry",
        type: "Sedan",
        price: 28000,
        fuel: "Petrol",
        capacity: 5,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Honda Civic",
        type: "Sedan",
        price: 25000,
        fuel: "Petrol",
        capacity: 5,
        gearbox: "Manual",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Ford Mustang",
        type: "Coupe",
        price: 55000,
        fuel: "Petrol",
        capacity: 4,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Chevrolet Corvette",
        type: "Sports",
        price: 65000,
        fuel: "Petrol",
        capacity: 2,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "BMW 3 Series",
        type: "Sedan",
        price: 42000,
        fuel: "Petrol",
        capacity: 5,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Audi A4",
        type: "Sedan",
        price: 40000,
        fuel: "Diesel",
        capacity: 5,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Mercedes-Benz C-Class",
        type: "Sedan",
        price: 48000,
        fuel: "Diesel",
        capacity: 5,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
      {
        name: "Lamborghini Huracan",
        type: "Sports",
        price: 80000,
        fuel: "Petrol",
        capacity: 2,
        gearbox: "Automatic",
        images: ["/uploads/image1.png"],
      },
    ],
  });

  console.log(cars);
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
