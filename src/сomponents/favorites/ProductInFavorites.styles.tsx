import styled from 'styled-components'

export const ProductInCartStyle = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  margin: 40px 0 0 5%;
  padding: 0 0 40px 0;
  box-shadow: 0px 2px 0px 0px rgba(176, 176, 178, 0.3);
  .ProductInFavorit_cover {
    width: 197px;
    height: 289px;
    border-radius: 16px;
  }
  p {
    margin: 0;
  }
  .ProductInFavorit_addart_and_delete {
    display: flex;
    align-items: center;
    margin: 50px 0 50px 0;
  }
  .ProductInFavorit_addart_and_delete img {
    width: 17px;
    margin: 0 0 0 25px;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }
  .ProductInFavorit_information {
    margin: 0 0 0 2%;
  }
  .ProductInFavorit_price {
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
  }
  .ProductInFavorit_delete {
    cursor: pointer;
  }
  .ProductInFavorit_addcart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    background: #344966;
    border-radius: 16px;
    color: white;
    width: fit-content;
    cursor: pointer;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    appearance: none;
  }
  @media (max-width: 835px) {
    .ProductInFavorit_cover {
      width: 255px;
      height: 375px;
    }
    h2 {
      font-size: 32px;
    }
  }
  @media (max-width: 630px) {
    margin: 40px 2% 0 2%;
    .ProductInFavorit_cover {
      width: 135px;
      height: 202px;
    }
    h2 {
      font-size: 18px;
      line-height: 20px;
      margin: 0 0 14px 0;
    }
    p {
      font-size: 12px;
    }
    .ProductInFavorit_price {
      font-size: 18px;
    }
    .ProductInFavorit_addart_and_delete {
      margin: 30px 0 30px 0;
    }
    .ProductInFavorit_information {
      margin: 0 0 0 5%;
    }
    .ProductInFavorit_addcart {
      font-size: 12px;
      padding: 10px 15px;
    }
  }
`
