const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div className="mt-24 text-black">page {id}</div>;
};

export default page;
