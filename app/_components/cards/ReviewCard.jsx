import Image from "next/image";

export default function ReviewCard({ review }) {
  return (
    <div className="max-w-107 w-full overflow-hidden rounded-[2.5rem] bg-white shadow-lg">
      <div className="p-4 lg:p-8 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">
              {review?.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              I highly recommend shopping from kicks
            </p>
          </div>

          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image
              src={review?.user_avatar } 
              alt={review?.user_name || "User"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 fill-current text-orange-400"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-700">5.0</span>
        </div>
      </div>

     
      <div className="relative h-60 lg:h-80 w-full">
        <Image
          src={review?.product_image }
          alt={review?.product_name || "Product Image"}
          fill
          sizes="(max-width: 768px) 100vw, 428px"
          className="object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}
