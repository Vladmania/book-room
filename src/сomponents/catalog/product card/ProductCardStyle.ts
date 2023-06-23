import styled from 'styled-components'


export const ProductCardStyle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  grid-column-start: span 1;
  width: 100%;
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
`
