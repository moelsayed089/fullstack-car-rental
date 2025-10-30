// app/page.tsx
import CarList from "@/components/car/CarList";
import HeaderSection from "@/components/layout/HeaderSection";
import PickAndDropWrapper from "@/components/pick-up&drop-off/PickAndDropWrapper";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return (
    <div className="container">
      <HeaderSection />
      <PickAndDropWrapper />
      <CarList page={page} />
    </div>
  );
}
