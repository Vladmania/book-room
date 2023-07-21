import styled from 'styled-components'
import star from '../../pablic/Starno.svg'
import starcolor from "../../pablic/Star.svg"
import starMobail from "../../pablic/Starmobail.svg"
import starMobailno from "../../pablic/Starbecmobail.svg"

export const ProductPageStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 2fr);
    grid-column-gap: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
    padding: 10px 40px;
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
    position: absolute;
    right: 20px;
    top: 20px;
    opacity: 0.6;
  }
  .product_page_favorites img {
    margin: auto;
  }
  .product_page_cover {
    grid-column-start: span 5;
    position: relative;
  }
  .product_page_rating {
    display: flex;
    color: #b9bac3;
  }
  .product_page_rating_star {
    margin: 0 1%;
  }
  .product_page_rating_ball {
    margin: auto 0 auto 22%;
}
  .product_page_rating_pointer {
    width: 57%;
    margin: 0 0 0 2%;
    display: inline;
  }
  .product_page_rating_with_pointer{
    display: flex;
    align-items: center;
  }
  .product_page_rating_arrow {
    margin: 0 0 0 5%;
  }
  .rating {
    width: 300px;
    height: 40px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }
  .product_page_overall_score{
    display: inline-flex;
    margin: 0 45px 0 0;
  }
  .rating:not(:checked) > input {
    display: none;
  }
  .product_page_info{
    grid-column-start: 7;
    grid-column-end: 13;
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
    width: 100%;
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
  .product_page_description_mobail{
    display: none;
  }
  @media (max-width: 964px){
    .product_page_rating{
  display: block;
}
  }
  @media (max-width: 835px){
    margin: 60px 2% 0;
    .product_page_cover {
    grid-column-start: span 6;
}
h1{
  font-size: 32px;
}
h3{
  font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
p{
  font-size: 14px;
}
.product_page_hardcover {
    padding: 10px 25px;
    font-size: 12px;
}
.product_page_button_paperback {
    margin: 0 7% 0 0;
}
.fTnYzp .product_page_paperback {
    font-size: 12px;
}
.product_page_rating{
  display: block;
}
  }
  @media (max-width: 700px){
    h1{
      font-size: 18px;
    line-height: 20px;
    }
    h3{
      font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
    p{
      font-size: 12px;
    }
    .product_page_hardcover {
    font-size: 12px;
}
.product_page_paperback {
    font-size: 12px;
}
    .product_page_rating_with_pointer {
    display: block;
}
.product_page_favorites {
    display: none;
}
.rating:not(:checked)>label {
    padding: 0 4% 0 0;
}
.product_page_rating_arrow {
    display: none;
}
.rating:not(:checked) label:before {
    content: url(${starMobail});
  }

  .rating input:checked ~ label {
        content: url(${starMobailno});
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
        content: url(${starMobailno});
  }

  .rating > input:checked + label:hover ~ label {
        content: url(${starMobailno});
  }
  .product_page_rating_pointer {
    font-size: 12px;
}
.product_page_overall_score img{
    width: 17px;
}
.product_page_description{

}
.product_page_description_mobail{
  display: block;
    grid-column-start: 1;
    grid-column-end: 13;

  }
  .product_page_description_full{
    display: none;
  }
}
`
