import { getCarById } from "@/actions/car.action";
import { formatNumber } from "@/utils/formatNumber";
import Image from "next/image";

const SummaryCardInPayment = async ({ carId }: { carId: string }) => {
  const carDetails = await getCarById(carId);

  return (
    <>
      <div className="bg-white p-5 rounded-md shadow-sm   ">
        <h2 className="text-lg font-semibold mb-2">Rental Summary</h2>
        <p className="text-sm text-gray-500 mb-5">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>

        <div className=" mb-4">
          <p className="font-medium text-2xl text-gray-600 ">
            {carDetails?.name ?? "Car Name"}
          </p>
          <Image
            src={carDetails?.images[0] ?? "/uploads/image1.png"}
            width={300}
            height={100}
            alt={carDetails?.name ?? "Car Image"}
            className="rounded-md mb-3 object-cover p-5"
          />
        </div>

        <div className="flex justify-between mb-4">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">
            {formatNumber(carDetails?.price ?? 0)} $
          </p>
        </div>
      </div>
    </>
  );
};

export default SummaryCardInPayment;
