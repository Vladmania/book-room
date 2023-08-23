import styled from 'styled-components'

export const ProductCardStyle = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  grid-column-start: span 3;
  width: 100%;
  opacity: 0;
  animation: show 1s 1;
  animation-fill-mode: forwards;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .product_card_cover {
    height: 60%;
  }
  .product_card_cover img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
  .product_card_rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product_card_rating p {
    color: #b9bac3;
  }
  .product_card_name {
    margin: 30px 0 0 0;
    overflow: hidden;
    max-height: 24px;
  }
  .product_card_author {
    margin: 0 0 10px 0;
    color: #b9bac3;
    overflow: hidden;
    max-height: 24px;
  }
  .product_card_price {
    cursor: pointer;
    background: #344966;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    color: white;
    padding: 10px 50px;
    margin: 15px 0 0 0;
  }
  .product_page_favorites {
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #34496687;
    position: absolute;
    margin: 20px;
  }
  .product_page_favorites img {
    margin: auto;
    width: 30px;
    padding: 2px 0 0 0;
  }
  .if_product_cart {
    cursor: pointer;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    padding: 10px 50px;
    margin: 15px 0 0 0;
    border-radius: 16px;
    border: 1px solid var(--dark, #0d1821);
  }
  @media (max-width: 945px) {
    grid-column-start: span 4;
  }
  @media (max-width: 700px) {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin: 0 0 30px 0;
    grid-column-start: span 6;
    .product_card_price {
      font-size: 14px;
      border-radius: 25px;
      padding: 10px;
    }
    .product_card_rating img {
      width: 15px;
      height: 15px;
    }
    .if_product_cart {
      font-size: 14px;
      border-radius: 25px;
      padding: 10px;
    }
    .product_page_favorites {
      width: 25px;
      height: 25px;
    }
    .product_page_favorites img {
      width: 15px;
      height: 15px;
    }
  }
`
