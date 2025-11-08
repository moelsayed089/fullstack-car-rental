"use server";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/db";
import { UploadApiResponse } from "@/lib/cloudinary";

export async function uploadCarWithImages(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const price = parseFloat(formData.get("price") as string);
  const fuel = formData.get("fuel") as string;
  const capacity = parseInt(formData.get("capacity") as string);
  const gearbox = formData.get("gearbox") as string;

  // 👇 نجيب كل الملفات اللي اسمها "images"
  const files = formData.getAll("images") as File[];

  if (files.length === 0) throw new Error("No images uploaded");

  // 👇 نرفع كل الصور إلى Cloudinary بالتوازي
  const uploadPromises = files.map(async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise<string>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "cars" },
        (error, result: UploadApiResponse | undefined) => {
          if (error) return reject(error);
          resolve(result!.secure_url);
        }
      );
      stream.end(buffer);
    });
  });

  const imageUrls = await Promise.all(uploadPromises);

  // 👇 نحفظ البيانات في قاعدة البيانات
  const car = await prisma.car.create({
    data: {
      name,
      type,
      price,
      fuel,
      capacity,
      gearbox,
      images: imageUrls, // مصفوفة روابط الصور
    },
  });

  return car;
}
