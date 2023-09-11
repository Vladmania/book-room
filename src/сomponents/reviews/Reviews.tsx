import { ReviewsText } from "./ReviewsText";
import { StyleReview } from "./Reviews.Style";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { thankaddReviews } from "../../store/Slice/ReviewsSlice";
import { useParams } from "react-router-dom";
import { thankchangeRating } from "../../store/Slice/ProductSlice";

interface IReviews {
  rating: number;
  sum: number;
}

export const Reviews = (props: IReviews) => {
  const dispatch = useAppDispatch();
  const profil = useAppSelector((state) => state.profil.profil);
  const isAuts = useAppSelector((state) => state.profil.isAuth);
  const reviews = useAppSelector((state) => state.review.review);
  const [valueTextarea, setValueTextarea] = useState("");

  let param = useParams();

  const showReviews = reviews.map((event) => (
    <ReviewsText
      name={event.name}
      avatar={event.avatar}
      feedback={event.feedback}
      key={event.id}
    />
  ));

  return (
    <StyleReview>
      <h2>Comments</h2>
      {reviews.length === 0 ? null : showReviews}
      {isAuts ? (
        <>
          <textarea
            placeholder="Share a comment"
            onChange={(e) => setValueTextarea(e.target.value)}
          />
          <div
            className="reviews_button"
            onClick={() => {
              dispatch(
                thankaddReviews({
                  prductId: Number(param.productId),
                  name: profil[0].name || profil[0].email,
                  avatar: profil[0].photo,
                  feedback: valueTextarea,
                  rating: props.rating,
                })
              );
              dispatch(
                thankchangeRating({
                  id: Number(param.productId),
                  rating: Number(props.sum.toFixed(2)) || 0,
                })
              );
            }}
          >
            Post a comment
          </div>
        </>
      ) : null}
    </StyleReview>
  );
};
