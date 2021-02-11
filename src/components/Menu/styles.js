import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #FFF;
  border: 1px solid rgba(15, 39, 118, 0.1);
  padding: 0 50px 0 50px;
  color: #2e2e2e;

  div {
    cursor: pointer;
    &:hover {
      color: #000;
      transition: all 0.5s;
    }
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


