import { getAllCars } from "@/actions/car.action";
import ClientCarList from "./ClientCarList";

export default async function CarList() {
  const { cars } = await getAllCars();

  if (!cars || !cars.length) {
    console.log("⚠️ No cars found or Prisma failed to connect");
    return <div className="p-6 text-center text-black">No cars found</div>;
  }

  return <ClientCarList cars={cars} />;
}
