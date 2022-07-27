import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  /* border: 1px solid red; */
  margin: 0 1.5vw 6px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 5px -5px #dadce0;

  i {
    color: #dadce0;
    padding-left: 15px;
    cursor: pointer;

    height: 100%;
    :hover {
      color: gray;
    }
  }
`;

export const Add = styled.label`
  width: 100%;
  padding-left: 30px;

  input {
    height: calc(2vw + 25px);
    width: 100%;
    font-size: calc(1vw + 15px);
    color: gray;
    ::placeholder {
      color: #dadce0;
      font-style: italic;
    }
  }
`;
