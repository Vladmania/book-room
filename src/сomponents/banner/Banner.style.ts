import styled from "styled-components";
import fairyimg from '../../pablic/atz1.png'
import img from '../../pablic/unsplash_DgQf1dUKUTM.png'
import imgMobail from '../../pablic/booksimg.png'


export const BannerStyle = styled.div`
    background: url(${img}) no-repeat bottom left;
    display: flex;
    position: relative;
    margin-top: 40px;
    height: 400px;
    background-color: #F0F4EF;
    border-radius: 16px;
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
    margin: 80px 0 0 10%;
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
img{
    position: absolute;
    top: 0;
    right: 10%;
    z-index: -1;
}
.mobail{
    display: none;
}
@media (max-width: 1100px) {
    img{
    right: 0;
}
}
@media (max-width: 945px) {
    margin: 45px 2% 0;
    grid-column-start: span 4;
    height: 289px;
    .banner_special_offer h2{
        font-size: 32px;
}
.mobail{
    display: flex;
}
.full{
    display: none;
}
.banner_special_offer p{
    font-size: 16px;
}
img{
    top: -74px;
}
.banner_special_offer{
    margin: 45px 0 0 10%;
}
   }
   @media (max-width: 700px) {
    background: url(${imgMobail}) no-repeat top 48px right;
    background-color: #F0F4EF;
    display: flex;
    flex-direction: column;
    height: 505px;
    img{
        position: unset;
        width: 253px;
        margin: auto auto 0;
}
.banner_special_offer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}
.banner_special_offer h2{
    margin: 0;
    font-size: 18px;
}
.banner_special_offer p{
    width: 88%;
    font-size: 14px;
}
.banner_special_offer div{
    font-size: 12px;
}
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
@media (max-width: 945px) {
    img{
        width: 389px;
    height: 345px;
    bottom: -53px;
    }
    .banner_special_offer h2{
        font-size: 32px;
    }
    .banner_special_offer p{
        font-size: 16px;
    }
}
@media (max-width: 700px) {
    margin: 70px 2%;
    height: 570px;
    display: flex;
    flex-direction: column-reverse;
    img{
        width: 282px;
        height: 250px;
        bottom: -12px;
        margin: auto;
    }
    .banner_special_offer{
        margin: 0 0 78px 10%;
    }
    .banner_special_offer h2{
        font-size: 18px;
    }
    .banner_special_offer p{
        width: 90%;
        font-size: 14px;
    }
    .banner_special_offer div{
        font-size: 16px;
    }
}

`