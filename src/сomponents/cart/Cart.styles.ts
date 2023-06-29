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
  .empty_cart_message span {
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
`
