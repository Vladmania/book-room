import styled from "styled-components";


export const GenrePanelStyle = styled.div`
    font-size: 16px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.75px;
    display: flex;
    margin: 0 0 10px 0;
    color: #344966;
    animation: genrePanel 1s 1; 
    animation-fill-mode: forwards; 
@keyframes genrePanel{
 0%{ opacity:0; }
 100% { opacity:1; }
}
    img{
      margin: 0 10px 0 0;
      cursor: pointer;
    }

`