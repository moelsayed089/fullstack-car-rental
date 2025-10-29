import { getCarById } from "@/actions/car.action";

const CarDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const CarDetails = await getCarById(id);
  if (!CarDetails) return <div className="p-6 text-center">Car not found</div>;
  return (
    <div>
      car details {id}
      <h1>hello {CarDetails?.name}</h1>
    </div>
  );
};

export default CarDetails;
