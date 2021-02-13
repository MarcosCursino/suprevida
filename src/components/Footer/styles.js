import styled from 'styled-components';

export const Container = styled.div`
  background: #006A6A;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  color: #FFF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 250px ;
  width: 100%;
  padding: 0 20px 0 20px;

 @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    align-items: center;

    .localizacao {
      h1 {
        text-align: center;
        font-size: 22px;

        &:after {
          left: 73px !important;
          width: 50px !important;
        }
      }
    }

    article {
      text-align: center;
      margin-top: 10px;

      p {
        font-size: 13px;
      }
    }
 }

  .localizacao {
    display: flex;
    flex-direction: column;
    h1 {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        border: 2px solid #FFF;
        bottom: -10px;
        left: 0;
        width: 80px;
      }
    }
    p {
      margin: 0 0 10px 0;
    }
  }
  .contato {
    display: flex;
    align-items: center;
    justify-content: center;

    section {
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        margin-top: 10px;
      }

      button {
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 205px;
        align-items: center;
        background: #FFF;
        font-size: 12px;
        padding: 0 10px 0 10px;
        font-weight: 800;
        margin-bottom: 20px;
        color: #000;
        display: flex;
        justify-content: space-around;
        cursor: pointer;

        &:nth-child(2) {
          padding: 0px
       }

        @media (max-width: 768px) {
          button {
            height: 35px;
            width: 200px;
          }
        }
      }

      svg {
        &:nth-child(1) {
          width: 20px;
          height: 20px;
          margin-right: -10px
       } 
      }
    }
  }
  .patriocinio {
    display: flex;
    align-items: center;
    .content_patriocinio {
      margin: 0 0 0 30px;
      p {
        margin: 0;
        font-size: 12px;
        img {
          width: 100px;
        }
      }
    }
  }

  .share{
    display: flex;
    flex-direction: row;

    svg{
      width: 25px;
      height: 150px;
      margin-right: 40px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      margin-top: -30px;
      justify-content: space-around;
      max-width: 220px;
      width: 100%;

      svg{
        height: 100px;
        margin-right: 0px;
      }
    }
  }
`