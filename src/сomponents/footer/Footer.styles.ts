import styled from "styled-components";


export const FooterStyle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    background: #0D1821;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
   margin: 150px 0 0 0;
    .footer_email{
        margin: 40px 0 0;
    }
    .footer_content{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 73px 5% 0;
    }
    
    .footer_nav a{
        cursor: pointer;
        text-decoration: none;
        color: aliceblue;
    }
    @media (max-width: 873px) {
        font-size: 16px;
    .footer_nav{
        margin: 0 16px 0 0;
    }
    .footer_map{
        width: 48%;
    }
    .footer_map_img{
        width: 94%;
    }
   }
   @media (max-width: 600px) {
    margin: 70px 0 0 0;
    .footer_content{
        flex-direction: column;
    }
    .footer_map{
        width: 100%;
    }
    .footer_map img{
        width: 100%;
    }
   }
`