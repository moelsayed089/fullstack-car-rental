import { getAllCars } from "@/actions/car.action";
import Image from "next/image";

const Car = async () => {
  const cars = await getAllCars();
  return (
    <>
      {/* <pre>{JSON.stringify(cars, null, 2)}</pre> */}
      {cars?.map((car) => (
        <div key={car.id}>
          <h1>{car.name}</h1>
          <Image src={car.images[0]} alt={car.name} width={500} height={300} />
          <p>{car.price}</p>
          <p>{car.type}</p>
          <p>{car.fuel}</p>
          <p>{car.capacity}</p>
          <p>{car.gearbox}</p>
        </div>
      ))}
    </>
  );
};

export default Car;
