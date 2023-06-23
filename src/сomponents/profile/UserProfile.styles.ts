import styled from "styled-components";

export const UserProfileStyle = styled.div`
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin: 60px 0 110px 5%;
        animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
        .userProfile{
                margin: 0 0 0 10%;
                width: 36%;
        }
       
        .userProfile_information p{
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                text-align: right;
                text-decoration-line: underline;
                color: #8D9F4F;
                cursor: pointer;
        }
        .userProfile_information h2{
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
        }
        .userProfile_information_password p{
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                text-align: right;
                text-decoration-line: underline;
                color: #8D9F4F;
                cursor: pointer;
        }
        .photo_upload_img{
                position: relative;
                display: flex;
                bottom: 41px;
                left: 11px;
                pointer-events: none;
                cursor: pointer
        }
        .userProfile_information_password h2{
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
        }
        .UserProfile_photo_img{
                border-radius: 16px;
                display: flex;
                width: 305px;
                height: 305px;
                object-fit: cover;
        }
        .UserProfile_photo_upload{
                background: #344966;
                width: 48px;
                height: 48px;
                position: relative;
                border-radius: 50%;
                cursor: pointer;
                bottom: 58px;
                left: 239px;
                
        }
        .photo_upload{
                cursor: pointer;
                height: 100%;
                left: 0;
                opacity: 0;
                position: relative;
                top: 0;
                width: 100%;
                border-radius: 50%;
        }
        .userProfile_information{
                display: flex;
                justify-content: space-between;
        }
        .userProfile_information_password{
                display: flex;
                justify-content: space-between;
        }
        .userProfile_information_input img{
                margin: 0 0 0 6%;
        }
        .userProfile_profile_img{
                
        }
        .userProfile_information_input{
                display: flex;
                align-items: center;
                width: 100%;
                border-radius: 16px;
                background: #F0F4EF;
                margin: 0 0 20px 0;
        }
        .userProfile_information_input input{
                background: #F0F4EF;
                border-radius: 16px;
                border: none;
                outline: none;
                height: 34px;
                width: 100%;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: #344966;
                letter-spacing: 0.75px;
        }
        .userProfile_information_input p{
                color: #344966;
                display: flex;
                margin: 6px 0 0 0;
        }
        .userProfile_profile_info{
                margin: 0 0 0 4%;
                width: 68%;
        }
`
