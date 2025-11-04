import { getAllCars } from "@/actions/car.action";
import ClientCarList from "./ClientCarList";

export default async function CarList() {
  const { cars, totalPages } = await getAllCars();

  if (!cars || !cars.length) {
    console.log("⚠️ No cars found or Prisma failed to connect");
    return <div>No cars found</div>;
  }

  return <ClientCarList cars={cars} totalPages={totalPages} />;
}
