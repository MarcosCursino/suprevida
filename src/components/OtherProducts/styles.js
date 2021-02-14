import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h3 {
    color: #006A6A;
    font-size: 24px;
    font-weight: 900;

    @media (max-width: 560px) {
      font-size: 16px;
      text-align: center;
    }
  }

`
export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

`

export const Item = styled.div`
  margin: 40px; 
  display: flex;
  width: 194px;
  height: 346px;
  flex-direction: column;

  @media (max-width: 1370px) {
    margin: 0 20px;
  }

  @media (max-width: 560px) {
    height: 290px;

    img {
      max-height: 150px;
    }
  }

  img {
    width: auto;
    height: auto;
    object-fit: cover;
    max-height: 176px;
  }

  button {
    margin: 10px 0 10px 0;
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 2px;
    background-color: #FFF;
    color: #4B4B4B;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid #006A6A;

    @media (max-width: 560px) {
      width: 150px;
      font-size: 12px;
      margin-left: 20px;
      height: 30px !important;
    }
  }

  span {
    margin-top: 10px;
    color: #646464;
    font-size: 12px;

    @media (max-width: 560px) {
      text-align: center;
    }
  }

  div {
    margin-top: 20px;
    font-size: 18px;
    line-height: 18px;
    color: #4B4B4B;
    font-weight: 800;

    @media (max-width: 560px) {
      font-size: 15px;
      margin-top: 10px;
      text-align: center;
    }
  }

  strong {
    font-size: 11px;
    margin-left: 5px;
    font-weight: 500;
    color: #a0a0a0;
  }
`
