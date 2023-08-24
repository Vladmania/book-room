import styled from 'styled-components'

export const PurchaseAlertStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00000096;
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
  .shopping_modal {
    display: flex;
    justify-content: space-around;
    font-family: 'Poppins';
    font-style: normal;
    width: 60%;
    padding: 30px;
    background: white;
    border-radius: 16px;
    margin: 5% auto;
    align-items: start;
  }
  p{
    display: flex;
    width: 185%;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 60px;
    cursor: pointer;
  }
  `