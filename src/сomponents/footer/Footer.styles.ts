import styled from "styled-components";


export const FooterStyle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    background: #0D1821;
    width: 100%;
    height: 341px;
    display: flex;
    justify-content: space-between;
    color: white;
   
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
`