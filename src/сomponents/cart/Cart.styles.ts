import styled from "styled-components";


export const CartStyle = styled.div`
        display: flex;
        justify-content: center;
        margin: 118px 0 158px 0;
        align-items: center;
        font-family: 'Poppins';
        font-style: normal;
        animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
    img{
        margin-right: 11%;
    }
    .empty_cart_message span{
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
    .empty_cart_message h2{
        font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0;
    }
    .empty_cart_message p{
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        margin: 20px 0 70px 0;
    }
`