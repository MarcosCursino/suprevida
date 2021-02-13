import styled from 'styled-components';

export const Nav = styled.nav`
  height: 130px;
  display: flex;
  width: 100%;
  background-color: #fff;
  align-items: center;
  position: relative;
  justify-content: center;

  .flexAccount {
    display: flex;
    margin-right: 40px;
  }

  @media (max-width: 1480px) {
    height: 100%;

    .flex {
      margin-top: 10px;
      flex-direction: column;
    }

    .contentUser {
      display: flex;
      flex-direction: row;
    }
  }

  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;

    @media (max-width:1920px){
      margin-left: 40px;
    }
  }
  .imgLogo {
    width: 166px;
    height: 92px;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    .imgLogo {
      width: 120px;
      height: 68px;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    .imgLogo {
      width: 100px;
      height: 58px;
      object-fit: cover;
    }
  }
  
  img {
    margin-right: 95px;
    width: 25px;
    height: 25px;

    @media (max-width: 1050px) {
      width: 20px;
      height: 20px;
    }
  }


  .contentInput {
    position: relative;

    input {
      font-size: 18px;
      outline: none;
      width: 744px;
      margin: 20px -30px 0 0;
      border: none;
      border-bottom: 2px solid #7A7A7A;
      padding-bottom: 5px;
      padding-left: 8px;
      color: #4B4B4B;
    }

    img {
      cursor: pointer;
    }

    select {
      width: 80px;
      outline: none;
      border: none;
      background-color: #FFF;
      margin-right: 5px;
      color: #4B4B4B;
      font-size: 16px;
    }

    option{
      background-color: #FFF;
      color: #4B4B4B;
      font-size: 14px;
    }

    @media (max-width: 1050px) {
      input {
        width: 400px;
      }
    }

    @media (max-width: 700px) {
      input {
        width: 200px;
        font-size: 12px;
      }

      img {
        width: 14px;
        height: 14px;
      }

      select {
        width: 60px;
        font-size: 12px;
      }

      option{
        font-size: 12px;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      margin-left: -120px;
      
      input {
        width: 150px;
        font-size: 12px;
      }

      img {
        display: none;
      }
    }
  }

  .contentUser {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -60px;

    span {
      margin: 0px 10px 0px -80px;
      color: #7A7A7A;
      font-size: 18px;
      cursor: pointer;

      &:hover {
      color: #4B4B4B !important;
      transition: all 0.5s;
    }
    }

    @media (max-width: 700px) {

      span {
        margin: 0px 10px 0px -90px;
        font-size: 12px;
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }

`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  font-size: 18px;
  height: 67px;
  margin-left: 20px;
  li {
    padding: 18px 10px;
  }
`

export const Container = styled.div`

`

export const Notification = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-left: 30px !important;

  span {
    width: 20px;
    height: 20px;
    font-size: 12px;
    border-radius: 100%;
    background-color: #006A6A;
    font-weight: 700;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }

  div{
    color: #646464;
    margin: 0 15px 0 15px;
  }


  @media (max-width: 700px) {
    span {
      width: 18px;
      height: 18px;
      font-size: 10px;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  color: #646464;
  font-size: 16px;
  width: 100vw;
  /* min-width: 1600px; */
  height: 40px;
`

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 40px 0 100px;

  @media (max-width: 1170px) {
    padding: 0 10px 0 10px;
  }

  @media (max-width: 960px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 700px) {
    div {
      display: block; 
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  div {
    cursor: pointer;
    font-size: 14px;
    &:hover {
      color: #3C3C3C;
      transition: all 0.5s;
    }
  }
`

export const Separator = styled.div`
  margin: 0 10px 0 10px;
`
export const Location = styled.div`
  font-size: 14px;
  margin-right: 150px;

  @media (max-width: 1170px) {
    margin-right: 10px;
  }

  @media (max-width: 960px) {
    font-size: 12px;
    text-align: center;
  }

  @media (max-width: 700px) {
    display: block; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 460px) {
    display: none;
  }

  strong {
    cursor: pointer;
  }
`
