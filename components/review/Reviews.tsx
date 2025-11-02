import Image from "next/image";
import userAvatar from "../../assets/userAvatar.png";
import AddReviewForm from "./AddReviewForm";
import { auth } from "@clerk/nextjs/server";
import { getReviewsByCarId } from "@/actions/car.action";

const Reviews = async ({ carId }: { carId: string }) => {
  const { userId } = await auth();
  const reviews = await getReviewsByCarId(carId);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="rounded-md bg-white p-5 mb-12">
        <div className="flex items-center mb-4 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">Reviews</h2>
          <span className="bg-blue-600 ml-2 text-white rounded-full px-3 py-1 text-sm">
            {reviews.length}
          </span>

          <div className="ml-auto">
            <AddReviewForm userId={userId} />
          </div>
        </div>

        <div className="space-y-6">
          {reviews.length === 0 && (
            <p className="text-gray-500 text-sm">No reviews yet.</p>
          )}

          {reviews.map((review) => (
            <div key={review.id} className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full">
                <Image
                  width={100}
                  height={100}
                  src={userAvatar}
                  alt="user avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {review.name || "Anonymous"}
                    </h3>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                    <div className="flex items-center mt-2 ">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
