import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;

  @media (max-width: 700px) {
    margin-top: 70px;
  }
  
  /* margin: 5px 40px 10px 40px; */
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.87);
  margin-left: 53px;

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

  @media (max-width: 560px) {
    margin-left: 0px;

    span {
      font-size: 12px;
    }

    strong {
      max-width: 300px;
      width: 100%;
      font-size: 12px;
      white-space: nowrap;                  
      overflow: hidden; /* "overflow" value must be different from "visible" */
      text-overflow:    ellipsis;
    }
  }
`

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  height: 580px;
  margin-right: 20px;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 0;
  }
`
export const Img = styled.div`
  margin-top: 25px;
  margin-right: 15px;
  margin-left: auto;
  width: 550px;
  height: 420px;
  background-color: #223;
  position: relative;

  img{
    width: 550px;
    height: 420px;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 450px;
    height: 320px;
    margin-top: 25px;
    margin-right: 15px;
    margin-left: 50px;

    img {
      width: 450px;
      height: 320px;
    }
  }

  @media (max-width: 800px) {
    width: 370px;
    height: 300px;
    margin-left: 0px;

    img {
      width: 370px;
      height: 300px;
    }
  }

  @media (max-width: 560px) {
    width: 190px;
    height: 200px;
    /* width: 99%; */

    img {
      width: 190px;
      height: 200px;
      /* width: 99%; */
    }
  }
`
export const Mini = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 150px;

  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid #e1e1e1;
    margin-bottom: 25px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    width: 120px;
  }

  @media (max-width: 560px) {
    width: 90px;

    img {
      width: 70px;
      height: 70px;
    }
  }
`

export const BoxRigth = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 580px;

  @media (max-width: 1200px) {
    width: 100%;
    align-items: center;
    margin-top: -230px;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 760px) {
    margin-top: -260px;
    h2 {
      text-align: center;
    }
  }

  @media (max-width: 560px) {
    margin-top: -360px;

    h2 {
      font-size: 14px;
    }

    h1 {
      font-size: 14px;
    }
  }

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
    width: 340px;
    /* width: calc(100% - 63px); */
    border: none;
    border-radius: 4px;
    background-color: #006A6A;
    box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.35);
    outline: none;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;

    @media (max-width: 560px) {
      font-size: 12px;
      height: 35px;
      width: 200px;
      margin-top: 20px;
    }
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

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .contador{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        margin-bottom: 20px;
        font-size: 28px;
        margin-right: 8px;
      }
    }

    @media (max-width: 560px) {
      span {
        margin-top: -10px;
        font-size: 16px;
      }
    }

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

      @media (max-width: 1200px) {
        height: 40px;
        margin: 0;
      }

      @media (max-width: 560px) {
        height: 30px;
        font-size: 12px;
        width: 100px;
      }

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
    width: 140px;
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

  input:focus{
    outline: 0;
   }

  button {
    width: 100px;
    height: 30px;
    background-color: #FFF;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    justify-content: space-around;
  }

  @media (max-width: 560px) {
    justify-content: center;

    span {
      text-align: center;
      font-size: 12px;
      width: 100px;
      margin-right: 10px;
    }

    button {
      width: 80px;
      margin-left: 10px;
      font-size: 10px;
    }

    input {
      width: 130px;
      font-size: 12px;
    }
  }
`
export const Share = styled.div`
  width: 300px;
  margin-top: 55px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #006A6A;
  border-radius: 4px;
  margin-left: 100px;
  padding: 15px 15px 15px 8px;

  span{
    font-size: 12px;
    color: rgb(0, 0, 0, 0.87);
    font-weight: 700;
  }

  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4B4B4B;
    width: 60%;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 560px) {
    margin-top: 30px;
    width: 200px;
    padding: 15 3px 15px 3px;

    div {
      justify-content: space-around;
      width: 100%;
    }
  }
`

export const Flag = styled.div`

  strong {
      z-index: 1;
      position: absolute;
      top: 16px;
      right: 5px;
      color: #FFF;
      text-align: center;
    }

    @media (max-width: 800px) {
      strong {
        font-size: 12px;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      border-left: 0;
      border-top: 105px solid #F8475F;
      border-left: 105px solid transparent;
      border-bottom: 105px solid transparent;

      @media (max-width: 800px) {
        border-top: 80px solid #F8475F;
        border-left: 90px solid transparent;
        border-bottom: 50px solid transparent;
      }
    }
`

