/* eslint-disable jsx-a11y/alt-text */
import { StyleReviewText } from './Reviews.Style'

interface IProps {
  name: string, 
  avatar: string, 
  feedback: string,
}

export const ReviewsText = (props: IProps) => {
  return (
    <StyleReviewText>
      <div className="review_avatar_in_nickname">
        <img
          src={
            props.avatar
              ? 'http://localhost:5000/' + props.avatar
              : 'https://img.icons8.com/ios/256/user-male-circle.png'
          }
        />
        <div className="review_name_and_data">
          <p className="review_name">{props.name}</p>
          <p className="review_data">Left a comment</p>
        </div>
      </div>
      <div className="review">
        <p className="review_text">{props.feedback}</p>
      </div>
    </StyleReviewText>
  )
}
