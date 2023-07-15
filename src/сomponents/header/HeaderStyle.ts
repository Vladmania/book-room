import styled from "styled-components";

export const StyleHeader = styled.div`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 5% 0;
    .header_search{
        display: flex;
        width: 55%;
        align-items: center;
    }
    h3{
        margin: 0 0 0 5%;
        color:#000000;
        font-size: 16px;
        font-weight: bolder;
        cursor: pointer;
    }
    .header_search input{
        background: #F0F4EF;
        border-radius: 16px;
        border: none;
        outline: none;
        height: 64px;
        width: 100%;
        padding-left: 2%;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #344966;
    }
    .header_search input::placeholder {
        color: #B9BAC4;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px; 
        align-items: center;
        letter-spacing: 0.75px;   
    }
    .header_button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 50px;
        gap: 10px;
        background: #344966;
        border-radius: 16px;
        color: white;
        cursor: pointer;
    }
    .header_poisk{
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 16px;
        background: #F0F4EF;
    }
    .header_poisk img{
        margin: 0 0 0 4%;
    }
    .header_button_collection{
        display: flex;
    }
    .header_button_if_authorized{
        width: 48px;
        height: 48px;
        background: #344966;
        margin: 13px;
        border-radius: 50%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .header_button_cart_length{
        display: flex;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #BFCC94;
    position: relative;
    top: 7px;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    left: 67px;
    color: #344966;
    justify-content: center;
    }
    @media (max-width: 944px) {
        margin: 24px 2% 0;
        .header_poisk{
            margin: 0 0 0 15%;
    }
    }
    @media (max-width: 630px) {
        .header_poisk{
        display: none;
    }
    .header_logo{
        width: 62px;
    }
    .header_search{
        display: none;
    }
    h3{
        margin: 6% 0 6% 6%;
        font-size: 14px;
        font-weight: 500;
    }
    .header_button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        padding: 10px 25px;
        gap: 10px;
        background: #344966;
        border-radius: 16px;
        color: white;
        cursor: pointer;
    }
    .header_button_collection{
        display: flex;
    }
    .header_button_if_authorized{
        width: 33px;
        height: 33px;
        margin: 9px;
    }
    .header_button_if_authorized img{
        width: 17px;
        height: 17px;
    }
    .header_button_cart_length{
    width: 16px;
    height: 16px;
    top: 5px;
    left: 46px;
    }
   }
`
export const StyleHeaderPoisk = styled.div`
        display: none;
        align-items: center;
        width: 95%;
        border-radius: 16px;
        background: #F0F4EF;
    img{
        margin: 0 0 0 4%;
    }
    input{
        background: #F0F4EF;
        border-radius: 16px;
        border: none;
        outline: none;
        height: 64px;
        width: 100%;
        padding-left: 2%;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #344966;
    }
    input::placeholder {
        color: #B9BAC4;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px; 
        align-items: center;
        letter-spacing: 0.75px;   
    }
    @media (max-width: 630px) {
        display: flex;
        margin: auto;
    }
`