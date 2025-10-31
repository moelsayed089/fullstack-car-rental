import Image from "next/image";
import userAvatar from "../../assets/userAvatar.png";
const Reviews = () => {
  return (
    <>
      <div className="  max-w-7xl mx-auto p-5">
        <div className="rounded-md  bg-white p-5  mb-12">
          <div className="flex items-center mb-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-800 -2">Reviews</h2>
            <span className="bg-blue-600 ml-2 text-white rounded-full px-3 py-1text-sm">
              4
            </span>

            <button className="ml-auto text-sm font-semibold text-blue-600 hover:cursor-pointer">
              Create Review
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full ">
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
                      Mohaed Elsayed
                    </h3>
                    <p className="text-sm text-gray-500">Front-end Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">1-2-2023</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 3 ? "text-yellow-400" : "text-gray-300"
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
                <p className="mt-2 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam temporibus ex recusandae hic obcaecati. Voluptate
                  debitis delectus quis temporibus unde, repudiandae error quo,
                  voluptatem natus repellendus harum animi eaque ratione.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full ">
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
                      Mohaed Elsayed
                    </h3>
                    <p className="text-sm text-gray-500">Front-end Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">1-2-2023</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 3 ? "text-yellow-400" : "text-gray-300"
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
                <p className="mt-2 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam temporibus ex recusandae hic obcaecati. Voluptate
                  debitis delectus quis temporibus unde, repudiandae error quo,
                  voluptatem natus repellendus harum animi eaque ratione.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full ">
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
                      Mohaed Elsayed
                    </h3>
                    <p className="text-sm text-gray-500">Front-end Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">1-2-2023</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 3 ? "text-yellow-400" : "text-gray-300"
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
                <p className="mt-2 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam temporibus ex recusandae hic obcaecati. Voluptate
                  debitis delectus quis temporibus unde, repudiandae error quo,
                  voluptatem natus repellendus harum animi eaque ratione.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button className="text-blue-600 font-medium">Show All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
