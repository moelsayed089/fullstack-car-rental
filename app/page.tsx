import AddCarForm from "@/components/car/AddCar";
import HeaderSection from "@/components/layout/HeaderSection";
import PickAndDropWrapper from "@/components/pick-up&drop-off/PickAndDropWrapper";
import AddReviewForm from "@/components/review/AddReviewForm";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  return (
    <div className="container mb-5">
      <HeaderSection />
      <PickAndDropWrapper />
      <AddReviewForm userId={userId} />

      {userId === "user_34vFrN7CujoM9aglthnbMRNdMj6" && <AddCarForm />}
    </div>
  );
}
