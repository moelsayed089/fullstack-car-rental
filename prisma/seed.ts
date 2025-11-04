// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   const cars = await prisma.car.createMany({
//     data: [
//       {
//         name: "Koenigsegg",
//         type: "Sport",
//         price: 110,
//         fuel: "Petrol",
//         capacity: 2,
//         gearbox: "Automatic",
//       },
//       {
//         name: "Nissan GT - R",
//         type: "Sport",
//         price: 250,
//         fuel: "Petrol",
//         capacity: 4,
//         gearbox: "Manual",
//       },
//       {
//         name: "Rolls - Royce",
//         type: "sedan",
//         price: 96,
//         fuel: "Petrol",
//         capacity: 2,
//         gearbox: "Automatic",
//       },
//       {
//         name: "All New Rush",
//         type: "SUV",
//         price: 75,
//         fuel: "Petrol",
//         capacity: 2,
//         gearbox: "Manual",
//       },
//       {
//         name: "CR - V",
//         type: "SUV",
//         price: 84,
//         fuel: "Petrol",
//         capacity: 6,
//         gearbox: "Manual",
//       },
//       {
//         name: "All New Terios",
//         type: "SUV",
//         price: 145,
//         fuel: "Petrol",
//         capacity: 6,
//         gearbox: "Manual",
//       },
//       {
//         name: "MG ZX Exclusice",
//         type: "Hatchback",
//         price: 65,
//         fuel: "Petrol",
//         capacity: 4,
//         gearbox: "Manual",
//       },
//       {
//         name: "New MG ZS",
//         type: "SUV",
//         price: 97,
//         fuel: "Petrol",
//         capacity: 6,
//         gearbox: "Automatic",
//       },
//     ],
//   });
//   return cars;
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
