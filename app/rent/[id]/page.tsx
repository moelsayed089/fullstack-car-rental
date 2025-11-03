import PaymentFormPage from "@/components/payment/PaymentForm";
import SummaryCardInPayment from "@/components/payment/SummaryCardInPayment";
import { auth } from "@clerk/nextjs/server";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { userId } = await auth();

  return (
    <div className="mt-24 mb-9  md:grid-cols-2 container text-black p-6 rounded-lg space-y-8">
      <SummaryCardInPayment carId={id} />
      <PaymentFormPage carId={id} userId={userId} />
    </div>
  );
};

export default page;
