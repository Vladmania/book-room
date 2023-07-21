import styled from 'styled-components'

export const RecommendationsStyle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 110px 5% 0;
  .recommendations_header {
    color: var(--dark, #0d1821);
    font-size: 40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .recommendations_page {
    display: grid;
    grid-template-columns: repeat(12, 2fr);
    grid-column-gap: 20px;
    margin: 50px 0 0 0;
  }
  @media (max-width: 835px){
    .recommendations_header {
    font-size: 32px; 
}
  }
  @media (max-width: 630px){
    margin: 60px 2% 0;
    .recommendations_header {
      font-size: 18px; 
}
  }
`
