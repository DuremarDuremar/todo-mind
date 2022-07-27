import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  margin: 0 1.5vw;
  padding-top: 10px;

  div {
    padding-left: 12px;
    height: 75px;
    display: flex;
    align-items: center;
    &:first-child {
      box-shadow: 0px -8px 5px -5px #dadce0;
    }
    box-shadow: 0px -5px 5px -5px #dadce0;
  }

  button {
    background-color: #fff;
    width: 4vw;
    height: 4vw;
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    border: 1px solid #dadce0;
    i {
      color: #04aa6b;
    }
  }

  span {
    font-size: 25px;
    padding-left: 18px;
  }
`;
