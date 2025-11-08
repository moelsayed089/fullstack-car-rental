import { uploadCarWithImages } from "@/actions/upload.action";

export async function POST(req: Request) {
  const formData = await req.formData();
  try {
    const car = await uploadCarWithImages(formData);
    return Response.json({ success: true, car });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error occurred";
    return Response.json({ success: false, message }, { status: 500 });
  }
}
