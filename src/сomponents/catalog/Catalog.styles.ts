import styled from "styled-components";


export const CatalogStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4,2fr);
    grid-column-gap: 20px;
    margin: 0 5%;
    `
    export const CatalogFlipStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 152px 0;
    span{
        width: 10px;
        height: 10px;
        border: black 2px solid;
        border-radius: 50%;
        color: transparent;
        cursor: pointer;
        margin: 0 30px 0 0;
    }
    .namberSize{
        width: 10px;
        height: 10px;
        border: black 2px solid;
        border-radius: 50%;
        color: transparent;
        cursor: pointer;
        margin: 0 30px 0 0;
        background-color: black;
    }
    .catalog_flip_back{
        margin: 0 50px 0 0;
        cursor: pointer;
    }
    .catalog_flip_forward{
        margin: 0 0 0 20px; 
        cursor: pointer;
    }
    `
    