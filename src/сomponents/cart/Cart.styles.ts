import styled from 'styled-components'

export const CartStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 118px 0 158px 0;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
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
  img {
    margin-right: 11%;
  }
  .empty_cart_message div {
    display: inline-flex;
    padding: 10px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    padding: 10px 50px;
    background: #344966;
    border-radius: 16px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    cursor: pointer;
  }
  .empty_cart_message h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }
  .empty_cart_message p {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 20px 0 70px 0;
  }
  @media (max-width: 835px) {
    margin: 118px 2% 158px;
    img {
      width: 44%;
      height: auto;
    }
    .empty_cart_message h2 {
      font-size: 32px;
    }
    .empty_cart_message p {
      font-size: 16px;
      margin: 20px 0 50px 0;
    }
    .empty_cart_message div {
      width: 44%;
    }
  }
  @media (max-width: 630px) {
    flex-direction: column-reverse;
    margin: 49px 2% 100px;
    .empty_cart_message div {
      width: 60%;
      color: var(--light, #f0f4ef);
      text-align: center;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.75px;
    }
    .empty_cart_message {
      margin: 0 0 40px 0;
    }
    img {
      width: 290px;
      height: 176px;
      margin: auto;
    }
    .empty_cart_message h2 {
      color: var(--dark, #0d1821);
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .empty_cart_message p {
      color: var(--dark-blue, #344966);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`

export const CartTotal = styled.div`
  font-size: 36px;
  font-family: Poppins;
  font-weight: 500;
  margin: 0 5% 110px;
  .cart_button_collection {
    display: flex;
  }
  .cart_button_сontinue {
    cursor: pointer;
    display: inline-flex;
    padding: 10px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid var(--dark, #0d1821);
    text-align: center;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.75px;
    margin: 0 3% 0 0;
  }
  .cart_button_сhekout {
    cursor: pointer;
    display: inline-flex;
    padding: 13px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: var(--dark-blue, #344966);
    color: var(--light, #f0f4ef);
    text-align: center;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 600;
    letter-spacing: 0.75px;
  }
  @media (max-width: 630px) {
    h3 {
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .cart_button_сontinue {
      display: block;
      margin: 0 0 18px 0;
    }
    .cart_button_сhekout {
      display: block;
    }
  }
`
