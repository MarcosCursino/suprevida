import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px solid #e3e3e3;
  color: #646464;
  font-size: 16px;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:1800px){
      margin-left: 40px;
    }

    @media (max-width: 1200px) {
      margin: 10px 0 20px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  span{
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

    @media (max-width: 1200px) {
      margin: 0 0 20px 0;
      height: 30px;
    }
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

    @media (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }

`