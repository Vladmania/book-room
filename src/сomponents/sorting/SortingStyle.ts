import styled from "styled-components";


export const SortingStyle = styled.div`
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        align-items: center;
        justify-content: space-between;
        margin: 110px 5% 50px;
        animation: show 1s 1; 
        animation-fill-mode: forwards; 
@keyframes show{
 0%{ opacity:0; }
 100% { opacity:1; }
}
    h2{
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        margin: 0;
    }
    .sort_categories{
        display: flex;
    }
    .sort_categories_element{
        display: flex;
        padding: 10px 8px 10px 15px;
        justify-content: center;
        align-items: center;
        gap: 91px;
        background: #F0F4EF;
        border-radius: 16px;
        margin: 0 0 0 20px;
    }
    .sort_band{
        background: #D6D8E7;
        border-radius: 40px;
        width: 378px;
        height: 12px;
        margin: 38px 0 0 0;
        position: absolute;
        top: 17px;
        left: 21px;
    }
    .sort_price_start{
        background: #F7F7FC;
        border: 2px solid #BFCC94;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        position: relative;
        top: -15px;
        left: -21px;
    }
    .sort_price_end{
        background: #F7F7FC;
        border: 2px solid #BFCC94;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        position: relative;
        top: -58px;
        left: 345px;
    }
    .sort_price_regulator{
        position: absolute;
        z-index: 1;
        background: #F0F4EF;
        border-radius: 16px;
        width: 413px;
        height: 151px;
        margin: 20px 0px 0px 10px;
        
    }
    .sort_price{
        display: flex;
        justify-content: space-between;
        margin: 0 6%;
    }
    .sort_price_mark{
        width: 0;
        height: 0px;
        border-left: 21px solid transparent;
        border-right: 23px solid transparent;
        border-bottom: 21px solid #F0F4EF;
        margin: -12px 0 0 10px;
    }
    .sort_categories_genre{
        position: absolute;
    z-index: 1;
    background: #F0F4EF;
    border-radius: 16px;
    width: 275px;
    margin: 20px 0px 0px 10px;
    padding: 15px;
    }
    .open{
        animation: open 0.5s 1; 
        animation-fill-mode: forwards; 
@keyframes open{
 0%{ transform: rotate(0deg); }
 100% { transform: rotate(90deg); }
}
    }
    .close{
        animation: close 0.5s 1; 
        animation-fill-mode: forwards; 
@keyframes close{
 0%{ transform: rotate(90deg); }
 100% { transform: rotate(0deg); }
} 
    }
    .noUi-connect{
        background: #BFCC94;
    }
    .noUi-target{
        height: 12px;
        width: 90%;
        margin: 50px auto 0;
        background: #D6D8E7;
        border-radius: 40px;
        border: none;
        box-shadow: none;
    }
    .noUi-horizontal .noUi-handle {
    width: 30px;
    height: 30px;
    right: -15px;
    top: -10px;
    border-radius: 50%;
}
.noUi-handle {
    border: 2px solid #BFCC94;
    background: #FFF;
    cursor: default;
   
}
.noUi-handle:before, .noUi-handle:after {
    display: none;
}
.sort_categories_product{
    display: flex;
    padding: 10px 8px 10px 15px;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 0 0 0 20px;
}
.sort_product{
    position: absolute;
    z-index: 1;
    background: #F0F4EF;
    border-radius: 16px;
    width: 178px;
    margin: 20px 0px 0px 10px;
    padding: 15px;
    color: #344966;
}
.sort_product p{
    cursor: pointer;
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.75px;
}
`