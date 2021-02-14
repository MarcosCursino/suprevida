import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px 0 100px;

  h3 {
    font-size: 24px;
    font-weight: 900;
  }
  color: #006A6A;

  div {
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 15px;
    margin-bottom: 15px;
    &:nth-child(5) {
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    padding: 0 20px 0 20px;

    margin-top: -160px;
    
    h3 {
      font-size: 16px;
    }

    h3:nth-child(4) {
      margin-top: -30px;
    }
  }
`

export const Content = styled.div`

  p{
    color: #4B4B4B;
    font-size: 16px;
  }

  @media (max-width: 560px) {
    margin-top: -20px;
  
    p {
      font-size: 13px;
    }

    h4 {
      font-size: 15px;
      margin-bottom: 0;
    }
  }
`

export const Information = styled.div`
  margin-right: auto;

  ul{
    margin-left: -20px;
    color: #4B4B4B;
    font-size: 16px;
  }

  li {
    line-height: 28px;
  }
  
  strong {
    color: #646464;
  }

  @media (max-width: 560px) {
    margin-top: -20px;

    li {
      font-size: 13px;
    }
  }
`



