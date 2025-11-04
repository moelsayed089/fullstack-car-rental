"use client";
import RatingWrapper from "../common/RatingWrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReviewSchema, ReviewValue } from "@/schema/ReviewSchema";
import { useUser } from "@clerk/nextjs";
import { createUserReview } from "@/actions/car.action";
import { useParams, useRouter } from "next/navigation";
import InputTextWrapper from "../common/InputTextWrapper";
import InputTextareaWrapper from "../common/InputTextareaWrapper";
import Spinner from "../common/Spinner";
import { Dialog } from "primereact/dialog";
import PrimaryButton from "../common/PrimaryButton";
import Icon from "../Icon";
import toast from "react-hot-toast";

const AddReviewForm = ({ userId }: { userId: string | null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  // const params = useParams();
  const router = useRouter();
  // const carId = params.id as string;
  const { user, isLoaded } = useUser();
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim();

  const form = useForm<ReviewValue>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      title: "",
      name: fullName,
      imageUrl: user?.imageUrl,
    },
  });

  useEffect(() => {
    if (isLoaded && user) {
      form.setValue("name", fullName);
      form.setValue("imageUrl", user.imageUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user]);
  const onSubmit = async (data: ReviewValue) => {
    setIsLoading(true);
    const reviewData = { ...data, carId: "6909c4e670bca959fad51c22", userId };

    try {
      await createUserReview(reviewData, "6909c4e670bca959fad51c22", userId!);
      toast.success("Review created successfully", {
        position: "bottom-right",
      });
      form.reset();
      setVisible(false);
      router.refresh();
    } catch (error) {
      toast.error("Error creating review", { position: "bottom-right" });
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PrimaryButton
        className="flex items-center gap-2"
        type="button"
        onClick={() => setVisible(true)}
      >
        <Icon name="addicon" />
        Add Review
      </PrimaryButton>
      <Dialog
        header="Add Review"
        visible={visible}
        className="w-[90vw] md:w-[50vw]"
        headerClassName="px-5 py-3"
        contentClassName="px-5 pb-5"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div>
            <InputTextWrapper
              value={form.watch("title")}
              type="text"
              placeholder="Write a Job Title"
              register={form.register("title")}
            />
            <p
              className={`text-sm transition-all ${
                form.formState.errors.title
                  ? "text-red-500"
                  : "text-transparent"
              }`}
            >
              {form.formState.errors.title?.message || "placeholder"}
            </p>
          </div>

          <div>
            <InputTextareaWrapper
              value={form.watch("comment")}
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
                form.formState.errors.rating
                  ? "text-red-500"
                  : "text-transparent"
              }`}
            >
              {form.formState.errors.rating?.message || "placeholder"}
            </p>
          </div>

          <div className="flex justify-end gap-3">
            <PrimaryButton
              type="button"
              onClick={() => setVisible(false)}
              className="bg-gray-500 hover:bg-gray-600"
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 px-5 py-2 rounded-md text-white hover:bg-blue-700 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <Spinner className="mr-2" /> Creating...
                </div>
              ) : (
                "Create Review"
              )}
            </PrimaryButton>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default AddReviewForm;
