import styled from 'styled-components'
import star from '../../pablic/Starno.svg'
import starcolor from "../../pablic/Star.svg"

export const ProductPageStyle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  margin: 60px 5% 0;
  h1 {
    line-height: 40px;
  }
  .product_page_buttons {
    display: flex;
  }
  .product_page_paperback {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    background: #b9bac4;
    border-radius: 16px;
    color: #f0f4ef;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }
  .product_page_button_paperback {
    margin: 0 15% 0 0;
  }
  .product_page_hardcover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    background: #344966;
    border-radius: 16px;
    color: #f0f4ef;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }
  .product_page_favorites {
    display: flex;
    align-items: center;
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background: #344966;
    position: relative;
    left: 432px;
    bottom: 762px;
    opacity: 0.6;
  }
  .product_page_favorites img {
    margin: auto;
  }
  .product_page_cover {
    margin: 0 10% 0 0;
  }
  .product_page_rating {
    display: flex;
    color: #b9bac3;
  }
  .product_page_rating_star {
    margin: 0 1%;
  }
  .product_page_rating_ball {
    margin: auto 5% auto 2%;
  }
  .product_page_rating_pointer {
    margin: 0 0 0 2%;
    display: flex;
    align-items: center;
  }
  .product_page_rating_arrow {
    margin: 0 0 0 5%;
  }
  .rating {
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }

  .rating:not(:checked) > input {
    display: none;
  }

  .rating:not(:checked) > label {
    padding: 0 7% 0 0;
    cursor: pointer;
    font-size: 40px;
    color: lightgrey;
    text-align: center;
    line-height: 1;
  }
  .product_page_cover_img{
    border-radius: 16px;
    width: 522px;
    height: 779px;
  }

  .rating:not(:checked) label:before {
    content: url(${star});
  }

  .rating input:checked ~ label {
        content: url(${starcolor});
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
        content: url(${starcolor});
  }

  .rating > input:checked + label:hover ~ label {
        content: url(${starcolor});
  }
`
