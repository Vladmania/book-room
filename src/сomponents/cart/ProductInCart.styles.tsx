import styled from "styled-components";


export const ProductInCartStyle = styled.div`
        display: flex;
        align-items: center;
        font-family: 'Poppins';
        font-style: normal;
        margin: 40px 0 0 5%;
        padding: 0 0 40px 0;
        box-shadow: 0px 2px 0px 0px rgba(176,176,178,0.3);
        .ProductInCart_cover{
            width: 197px;
            height: 289px;
            border-radius: 16px;
        }
        p{
            margin: 0;
        }
        .ProductInCart_quantity_and_removal{
            display: flex;
            align-items: center;
            margin: 50px 0 50px 0;
        }
        .ProductInCart_quantity_and_removal img{
            width: 17px;
            margin: 0 0 0 10%;
        }
        .ProductInCart_quantity_and_removal p{
            background: #F0F4EF;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .ProductInCart_quantity_and_removal input{
            width: 8%;
            text-align: center;
            border: none;
        }
        h2{
            font-weight: 700;
            font-size: 40px;
            line-height: 60px;
            margin: 0;
        }
        .ProductInCart_information{
            margin: 0 0 0 2%;
        }
        .ProductInCart_price{
            font-weight: 500;
            font-size: 36px;
            line-height: 54px;
        }
        .ProductInCart_delete{
            cursor: pointer;
        }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
       appearance: none; 
    }
    @media (max-width: 835px) {
        .ProductInCart_cover{
            width: 255px;
            height: 375px;
        }
        h2{
            font-size: 32px;
        }
    }
    @media (max-width: 630px) {
        .ProductInCart_cover{
            width: 135px;
            height: 202px;
        }
        h2{
            font-size: 18px;
            line-height: 20px;
            margin: 0 0 14px 0;
        }
        p{
            font-size: 12px;
        }
        .ProductInCart_price{
            font-size: 18px;
        }
        .ProductInCart_quantity_and_removal {
            margin: 30px 0 30px 0;
        }
        .ProductInCart_information {
            margin: 0 0 0 5%;
        }
    }
   
`