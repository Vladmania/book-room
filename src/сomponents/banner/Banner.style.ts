import styled from "styled-components";
import fairyimg from '../../pablic/atz1.png'
import img from '../../pablic/unsplash_DgQf1dUKUTM.png'

export const BannerStyle = styled.div`
    background: url(${img}) no-repeat bottom left;
    display: flex;
    margin-top: 40px;
    height: 400px;
    background-color: #F0F4EF;
    border-radius: 16px;
    justify-content: space-around;
    font-family: 'Poppins';
    font-style: normal;
    margin: 40px 5% 0;
    animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
.banner_special_offer{
    margin-top: 80px;
}
.banner_special_offer h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin: auto;
}
.banner_special_offer p{
    width: 45%;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
}
.banner_special_offer div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    background: #344966;
    border-radius: 16px;
    color: white;
    width: fit-content;
    cursor: pointer;
}
`

export const BannerAuthorizeNowStyle = styled.div`
    background: url(${fairyimg}) no-repeat bottom right;
    display: flex;
    height: 400px;
    background-color: #F0F4EF;
    border-radius: 16px;
    justify-content: space-around;
    font-family: 'Poppins';
    font-style: normal;
    margin: 150px 5% 0;
    animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
img{
    position: relative;
    bottom: 67px;
    height: 467px;
}
.banner_special_offer{
    margin-top: 80px;
}
.banner_special_offer h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0D1821;
    margin: auto;
}
.banner_special_offer p{
    width: 75%;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
}
.banner_special_offer div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    gap: 10px;
    background: #344966;
    border-radius: 16px;
    color: white;
    width: fit-content;
    cursor: pointer;
}
`