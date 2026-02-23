import React from "react";
import SectionTitle from "./shared/SectionTitle";
import Button from "./shared/Button";
import ReviewCard from "./cards/ReviewCard";

const reviewData = [
  {
    id: 1,
    title: "Good Quality",
    review_text: "I highly recommend shopping from kicks",
    rating: 5.0,
    user_avatar: "/Ellipse 1 (2).png",
    product_image: "/Frame 1439.png",
  },
  {
    id: 2,
    title: "Good Quality",
    review_text: "I highly recommend shopping from kicks",
    rating: 5.0,
    user_avatar: "/Ellipse 1 (3).png",
    product_image: "/Frame 1439 (1).png",
  },
  {
    id: 3,
    title: "Good Quality",
    review_text: "I highly recommend shopping from kicks",
    rating: 5.0,
    user_avatar: "/Ellipse 1 (1).png",
    product_image: "/Frame 1439 (2).png",
  },
];

const ReviewSection = () => {
  return (
    <div className="container mb-10 md:pb-20 flex flex-col gap-4 lg:gap-8 xl:px-0 px-4">
      <div className="flex items-end justify-between">
        <SectionTitle title={"Reviews"} />
        <Button title={"See all"} />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {reviewData?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;