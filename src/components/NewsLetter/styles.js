import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  min-width: 1600px;
  height: 60px;
  border-top: 1px solid #e3e3e3;
  color: #646464;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:1800px){
      margin-left: 40px;
    }
  }

  span{
    min-width: 600px;
    margin: 0 15px 0 4px;
  }

  input{
    width: 350px;
    height: 25px;
    margin: 0 15px 0 15px;
    padding-left: 8px;
    border-radius: 2px;
    border: 1px solid #ccc;
    font-size: 14px;

  }

  button{
    margin: 0 15px 0 15px;
    height: 25px;
    width: 130px;
    border: none;
    border-radius: 2px;
    background-color: #006A6A;
    color: #FFF;
    font-size: 14px;
    cursor: pointer;
    border: none;
  }

`