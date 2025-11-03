"use client";
import { deleteReview } from "@/actions/car.action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../common/PrimaryButton";
import Spinner from "../common/Spinner";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Icon from "../Icon";
import toast from "react-hot-toast";

interface DeleteReviewProps {
  reviewId: string;
  userId: string | null;
}

const DeleteReview = ({ reviewId, userId }: DeleteReviewProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleDelete = async () => {
    if (!userId) return;
    setIsDeleting(true);
    try {
      await deleteReview(reviewId, userId);
      setVisible(false);
      toast.success("Review deleted successfully", {
        position: "bottom-right",
      });
      router.refresh();
    } catch (error) {
      toast.error("Error deleting review", { position: "bottom-right" });
      return error;
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Button
        className="bg-red-500 px-3 py-2 rounded-md hover:bg-red-600"
        onClick={() => setVisible(true)}
        icon={<Icon name="deleteicon" />}
      />
      <Dialog
        header="Header"
        visible={visible}
        className="w-[90vw] md:w-[50vw]"
        headerClassName="px-5 py-3"
        contentClassName="px-5 pb-5"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <p className=" text-gray-500">
          Are you sure you want to delete this review? , this action cannot be
          undone
        </p>
        <div className="flex gap-2 mt-6">
          <PrimaryButton
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {isDeleting ? (
              <div className="flex items-center">
                <Spinner />
                <span className="ml-2">Deleting...</span>
              </div>
            ) : (
              "Delete"
            )}
          </PrimaryButton>

          <PrimaryButton
            onClick={() => setVisible(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </PrimaryButton>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteReview;
