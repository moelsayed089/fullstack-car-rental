import { getCarById } from "@/actions/car.action";
import CarInfo from "@/components/car/CarDetails";
import CarImage from "@/components/car/CarImage";
import Reviews from "@/components/review/Reviews";
const CarDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const CarDetails = await getCarById(id);
  if (!CarDetails) return <div className="p-6 text-center">Car not found</div>;
  return (
    <>
      <section className="flex flex-col">
        <div className="bg-gray-100 mt-22">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 max-w-7xl mx-auto">
            <CarImage car={CarDetails} />
            <CarInfo car={CarDetails} />
          </div>
          <Reviews carId={id} />
        </div>
      </section>
    </>
  );
};

export default CarDetailsPage;
