import CarList from "@/components/CarList";

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      {/* <Button label="Click me" icon="pi pi-check" /> */}
      <CarList />
    </div>
  );
}
