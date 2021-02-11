import styled from 'styled-components';

export const Nav = styled.nav`
  height: 130px;
  display: flex;
  width: 100%;
  min-width: 1600px;
  background-color: #fff;
  align-items: center;
  position: relative;

  .flex {
    margin-left: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
  }
  .imgLogo {
    width: 166px;
    height: 92px;
    object-fit: cover;
  }
  img {
    margin-right: 60px;
    width: 25px;
    height: 25px;
  }
  .contentInput {
    position: relative;
    input {
      font-size: 18px;
      outline: none;
      width: 744px;
      min-width: 744px;
      margin: 20px -30px 0 0;
      border: none;
      border-bottom: 2px solid #7A7A7A;
      padding-bottom: 5px;
      padding-left: 8px;
      color: #4B4B4B;
    }
  }
  .contentUser {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0px 30px 0px -55px;
      color: #7A7A7A;
      font-size: 18px;
      cursor: pointer;
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
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  color: #646464;
  font-size: 16px;
  width: 100%;
  min-width: 1600px;
  height: 40px;
`

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 98px;

  div {
    cursor: pointer;
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
  margin-right: 150px;

  strong {
    cursor: pointer;
  }
`
