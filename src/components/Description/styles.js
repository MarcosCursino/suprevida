import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px 0 100px;

  h3 {
    font-size: 22px;
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
`

export const Content = styled.div`
  min-width: 1400px;

  p{
    color: #4B4B4B;
    font-size: 16px;
  }
`

export const Information = styled.div`
  margin-right: auto;
  min-width: 1400px;

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
`



