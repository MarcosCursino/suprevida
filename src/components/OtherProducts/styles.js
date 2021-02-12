import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1600px;

  h3 {
    color: #006A6A;
    font-size: 24px;
    font-weight: 900;
  }

`
export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`

export const Item = styled.div`
  margin: 40px; 
  display: flex;
  width: 194px;
  height: 346px;
  flex-direction: column;

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

  }
  span {
    margin-top: 10px;
    color: #646464;
    font-size: 12px;
  }

  div {
    margin-top: 20px;
    font-size: 18px;
    line-height: 18px;
    color: #4B4B4B;
    font-weight: 800;
  }

  strong {
    font-size: 11px;
    margin-left: 5px;
    font-weight: 500;
    color: #a0a0a0;
  }
`
