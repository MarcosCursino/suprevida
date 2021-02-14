import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  background-color: #FFF;
  border: 1px solid rgba(15, 39, 118, 0.1);
  padding: 0 100px 0 100px;
  color: #2e2e2e;
  width: 100vw;
  flex-wrap: nowrap;

  div {
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #000;
      transition: all 0.5s;
    }
  }

  @media (max-width: 1300px) {
    padding: 0 20px 0 20px;

    div {
      font-size: 13px;
    }
  }

  @media (max-width: 960px) {
    display: none;
    height: 0;
  }
`
export const Store = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #006A6A !important;
      transition: all 0.5s;
    }

    div{
      &:hover {
      color: #006A6A !important;
      transition: all 0.5s;
      }
    }

    svg {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 999;
  display: none;

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#2E2E2E' : '#2E2E2E'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
  color: #2e2e2e;
  align-items: center;
  position: relative;

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
  
  .flex {
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #FFF;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 67px;
  margin-left: 20px;
  display: none;

  img {
    display: none;
  }

  button {
    background: none;
    border-color: none;
    color: #000;

    &:nth-child(1) {
      margin-left: 20px;
    }

    &:hover {
      transition: all 0.2s;
      border-bottom: 4px solid #8b5742;
      color: #2E2E2E;
    }

    @media (max-width: 960px) {
      color: #FFF !important;
    }
  }

  button {
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: none;
    text-transform: none;
    color: #000;
  }

  li {
    padding: 10px 0px;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #b1d4d2;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 200px;
    padding-top: 4.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 99;
    justify-content: normal;

    li {
      text-align: center;
      margin-right: 20px;
      color: #4B4B4B;
      cursor: pointer;
      font-weight: 500;

    }

    img {
      margin: -30px 40px 10px 20px;
      width: 100px;
      display: flex;
    }
  }
`

