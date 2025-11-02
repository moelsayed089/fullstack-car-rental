"use client";
import DialogWrapper from "../common/DialogWrapper";
import RatingWrapper from "../common/RatingWrapper";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReviewSchema, ReviewValue } from "@/schema/ReviewSchema";
import { useUser } from "@clerk/nextjs";
import { createUserReview } from "@/actions/car.action";
import { useParams } from "next/navigation";
import InputTextWrapper from "../common/InputTextWrapper";
import InputTextareaWrapper from "../common/InputTextareaWrapper";
import Spinner from "../common/Spinner";

const AddReviewForm = ({ userId }: { userId: string | null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const carId = params.id as string;
  const { user } = useUser();

  const form = useForm<ReviewValue>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      title: "",
      name: user?.firstName ?? "",
    },
  });

  const onSubmit = async (data: ReviewValue) => {
    setIsLoading(true);
    const reviewData = { ...data, carId, userId };

    try {
      await createUserReview(reviewData, carId, userId!);
      console.log("Review created:", reviewData);
      form.reset();
    } catch (error) {
      console.error("Error creating review:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogWrapper label="Write a review">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        noValidate
      >
        <div>
          <InputTextWrapper
            type="text"
            placeholder="Write a Job Title"
            register={form.register("title")}
          />
          <p
            className={`text-sm  transition-all ${
              form.formState.errors.title ? "text-red-500" : "text-transparent"
            }`}
          >
            {form.formState.errors.title?.message || "placeholder"}
          </p>
        </div>

        <div>
          <InputTextareaWrapper
            rows={4}
            cols={50}
            placeholder="Write a Review"
            register={form.register("comment")}
          />
          <p
            className={`text-sm min-h-3 transition-all ${
              form.formState.errors.comment
                ? "text-red-500"
                : "text-transparent"
            }`}
          >
            {form.formState.errors.comment?.message || "placeholder"}
          </p>
        </div>

        <div>
          <RatingWrapper
            value={form.watch("rating")}
            onChange={(val) =>
              form.setValue("rating", val, { shouldValidate: true })
            }
          />
          <p
            className={`text-sm min-h-3 pt-2 transition-all ${
              form.formState.errors.rating ? "text-red-500" : "text-transparent"
            }`}
          >
            {form.formState.errors.rating?.message || "placeholder"}
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700 hover:cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="flex items-center">
                  <Spinner className="mr-2" /> Creating.
                </div>
              </>
            ) : (
              "Create Review"
            )}
          </button>
        </div>
      </form>
    </DialogWrapper>
  );
};

export default AddReviewForm;
