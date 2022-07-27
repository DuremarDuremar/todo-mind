import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  border: 1px solid red;
  margin: 0 1.5vw;
  display: flex;
  align-items: center;
  i {
    color: #f0f1f3;
    padding-left: 15px;
    cursor: pointer;
    :hover {
      color: gray;
    }
  }
`;

export const Add = styled.label`
  width: 100%;
  padding-left: 30px;
  input {
    height: 80px;
    width: 100%;
    font-size: 2rem;
    color: gray;
    ::placeholder {
      color: #f0f1f3;
      font-style: italic;
    }
  }
`;
