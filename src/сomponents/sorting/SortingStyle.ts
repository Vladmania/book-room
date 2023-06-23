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
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 76px 12px 15px;
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
        margin-top: 79px;
    }
    .sort_price_mark{
        width: 0;
        height: 0px;
        border-left: 21px solid transparent;
        border-right: 23px solid transparent;
        border-bottom: 21px solid #F0F4EF;
        margin: -12px 0 0 10px;
    }
`