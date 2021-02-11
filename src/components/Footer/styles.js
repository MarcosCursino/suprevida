import styled from 'styled-components';

export const Container = styled.div`
  background: #006A6A;
  width: 100%;
  min-width: 1600px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px ;
  width: 100%;
  padding: 0 20px 0 20px;
  max-width: 1000px;

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
  }
`