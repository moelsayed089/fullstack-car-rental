import CarList from "@/components/car/CarList";
import HeaderSection from "@/components/layout/HeaderSection";
import PickAndDropWrapper from "@/components/pick-up&drop-off/PickAndDropWrapper";

export default function Home() {
  return (
    <div className=" container ">
      <HeaderSection />
      {/* <PickAndDropLable title="Pick up" /> */}
      <PickAndDropWrapper />
      {/* <Button label="Click me" icon="pi pi-check" /> */}
      <CarList />
    </div>
  );
}
