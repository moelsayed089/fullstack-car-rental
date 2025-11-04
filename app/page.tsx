import CarList from "@/components/car/CarList";
import HeaderSection from "@/components/layout/HeaderSection";
import PickAndDropWrapper from "@/components/pick-up&drop-off/PickAndDropWrapper";
import AddReviewForm from "@/components/review/AddReviewForm";
import { auth } from "@clerk/nextjs/server";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const { userId } = await auth();
  return (
    <div className="container mb-5">
      <HeaderSection />
      <PickAndDropWrapper />
      <AddReviewForm userId={userId} />
      {/* <CarList page={page} /> */}
    </div>
  );
}
