import z from "zod";

export const ReviewSchema = z.object({
  rating: z.number().min(1, "Rating is required").max(5),
  comment: z.string().min(10, "Comment too short").max(500),
  title: z.string().max(50, "Title too long").optional(),
  name: z.string().min(1, "Name is required"),
  imageUrl: z.string().optional(),
});

export type ReviewValue = z.infer<typeof ReviewSchema>;
