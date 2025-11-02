"use client";
import DialogWrapper from "../common/DialogWrapper";
import RatingWrapper from "../common/RatingWrapper";
import { useState } from "react";
import { useParams } from "next/navigation";
import { createUserReview } from "@/actions/car.action";
import { useUser } from "@clerk/nextjs";

const AddReviewFormTest = ({ userId }: { userId: string | null }) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const carId = params.id as string;
  const { user } = useUser();
  const fullName = `${user?.firstName} ${user?.lastName}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const reviewData = {
      title,
      comment,
      rating: ratingValue,
      name: fullName ?? "",
    };

    try {
      await createUserReview(reviewData, carId, userId!);
      console.log(reviewData, carId, userId);
      console.log("Review created successfully");
      // reset form
      setTitle("");
      setComment("");
      setRatingValue(0);
    } catch (error) {
      console.error("Error creating review:", error);
    }

    setIsLoading(false);
  };

  return (
    <DialogWrapper label="Write a review">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-5">
          <input
            type="text"
            placeholder="Write a Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />

          <textarea
            placeholder="Write a Review"
            rows={4}
            cols={50}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />

          <RatingWrapper value={ratingValue} onChange={setRatingValue} />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="bg-gray-600 px-5 py-2 rounded-md text-white hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </DialogWrapper>
  );
};

export default AddReviewFormTest;
