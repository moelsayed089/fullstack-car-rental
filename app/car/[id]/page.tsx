import { getCarById } from "@/actions/car.action";

const CarDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const CarDetails = await getCarById(id);
  return (
    <div>
      car details {id}
      <h1>hello {CarDetails?.name}</h1>
    </div>
  );
};

export default CarDetails;
