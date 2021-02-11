import styled from 'styled-components';

export const Container = styled.div`
  margin: 5px 40px 10px 40px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.87);
  margin-left: 30px;

  span {
    margin: 0 5px 0 5px;
    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: #777777;
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Product = styled.div`
  display: flex;
  margin-left: 35px;
  /* align-items: center;
  justify-content: center; */
  flex-direction: row;
  margin-top: 10px;
  /* background-color: #226; */
`

export const BoxLeft = styled.div`
  background-color: #D3D3D3;
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 580px;
`

export const BoxRigth = styled.div`
  /* background-color: #223; */
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 580px;

  h1 {
    font-size: 30px;
    color: rgb(0, 0, 0, 0.87);
  }

  span {
    font-size: 36px;
    color: #006A6A;
  }

  .buttonBuyItem {
    margin-top: 40px;
    height: 44px;
    width: calc(100% - 63px);
    border: none;
    border-radius: 4px;
    background-color: #006A6A;
    box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.35);
    outline: none;
    color: #FFF;
    font-size: 20px;
  }

  .infoProduct{
    font-size: 12px;
    color: #A0A0A0;
    margin-bottom: 25px;
  }

  .infoProduct2{
    margin-top: 20px;
    font-size: 16px;
    color: #4B4B4B;
    margin-bottom: 8px;

    strong {
      color: rgb(0, 0, 0, 0.87);
    }
  }

  .contador{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background-color: #112; */

    span {
      font-weight: bold;
    }

    .form{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;
      height: 75%;
      margin-top: -2px;
      border: 1px solid #7A7A7A;
      border-radius: 4px;
      color: #7A7A7A;

      div {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(1) {
          cursor: pointer;
          border-right: 1px solid #7A7A7A;
          &:hover {
            border-radius: 4px 0 0 4px;
            background-color: #f5f5f5;
          }
       }

        &:nth-child(2) {
          border: none;
          color: #000;
       }

       &:nth-child(3) {
         cursor: pointer;
         border-left: 1px solid #7A7A7A;
         &:hover {
            border-radius: 0 4px 4px 0;
            background-color: #f5f5f5;
          }
       }
      }
    }
  }
`
export const Freight = styled.div`
  margin-top: 18px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    width: 30%;
    font-size: 16px;
    color: rgb(0, 0, 0, 0.87);
  }

  input {
    width: 200px;
    background: #f5f5f5;
    border: 0;
    box-shadow: none;
    border-radius: 4px;
    height: 30px;
    font-size: 12px;
    text-align: center;
  }

  button {
    width: 100px;
    height: 30px;
    background-color: #FFF;
    border: 1px solid #ccc;
    opacity: .65;
    border-radius: 4px;
  }

`