import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export type { UploadApiResponse };
export default cloudinary;
