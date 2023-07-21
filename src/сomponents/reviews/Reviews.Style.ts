import styled from 'styled-components'

export const StyleReviewText = styled.div`
  margin: 5px 0;
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  padding: 30px;
  border-radius: 16px;
  background-color: #f0f4ef;
  width: 50%;
  .review_avatar_in_nickname {
    display: flex;
    align-items: center;
  }
  .review_avatar_in_nickname img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
  .review_name_and_data {
    margin: 0 0 0 20px;
  }
  .review_name {
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.75px;
    margin: 0;
  }
  .review_data {
    color: var(--dark-grey, #b9bac3);
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.75px;
    margin: 4px 0 0 0;
  }
  .review_text {
    margin: 9px 0 0 79px;
    word-break: break-all;
  }
  .review_foto_collection {
    display: flex;
  }
  .review_foto {
    width: 20%;
    height: 250px;
    overflow: hidden;
    margin: 5px;
  }
  .review_foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  @media (max-width: 835px){
    width: 80%;
  }
`

export const StyleReview = styled.div`
  font-family: Poppins;
  font-style: normal;
  margin: 100px 5% 0;
  textarea {
    display: flex;
    width: 50%;
    height: 128px;
    align-items: center;
    border-radius: 16px;
    resize: none;
    padding: 30px;
    border: none;
    background: var(--light, #f0f4ef);
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    outline: none;
    margin: 55px 0 30px 0;
  }
  .reviews_button {
    cursor: pointer;
    display: inline-flex;
    padding: 10px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--dark-blue, #344966);
    color: #f0f4ef;
    margin: 0 0 100px 0;
  }
  h2 {
    color: var(--dark, #0d1821);
    font-size: 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 45px 0;
  }
  @media (max-width: 835px){
    margin: 60px 2% 0;
    textarea {
      width: 90%;
    }
    h2{
      font-size: 32px;
    }
  }
  @media (max-width: 550px){
   textarea {
    width: 80%;
   }
}
`
