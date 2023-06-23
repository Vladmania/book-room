import styled from "styled-components";


export const AuthorizationsStyle = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #00000096;  
        opacity:0; 
        animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
    input{
        background: #F0F4EF;
        border-radius: 16px;
        border: none;
        outline: none;
        height: 64px;
        width: 100%;
        padding-left: 2%;
    }
    p{
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: #344966
    }
    .authorizations{
        width: 45%;
    }
    .authorizations_modal{
        display: flex;
        justify-content: space-around;
        font-family: 'Poppins';
        font-style: normal;
        width: 60%;
        padding: 30px;
        background: white;
        border-radius: 16px;
        margin: 5% 18%;
        align-items: start;
    }
    .authorizations_login_singup{
        display: flex;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 60px;
        cursor: pointer;
    }
    .authorizations_active{
        color: blue;
    }
    .authorizations_field{
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 16px;
        background: #F0F4EF;
    }
    
    .authorizations_field img{
        margin: 0 0 0 4%;
    }
    .authorizations_button{
        display: inline-block;
        padding: 10px 50px;
        background: #344966;
        border-radius: 16px;
        color: #F0F4EF;
    }
    .authorizations_picture{
        width: 45%;
        margin: auto;
    }
    .authorizations_close{
        cursor: pointer;
    }
    .authorizations_message{
        color: red;
    }
`