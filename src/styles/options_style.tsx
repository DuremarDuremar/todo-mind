import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  margin: 0 1.5vw;
  height: calc(2vw + 25px);
  box-shadow: 0px -5px 5px -5px #dadce0;
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    :first-child {
      justify-content: flex-start;
      padding-left: 1.2vw;
    }
    :nth-child(2) {
      justify-content: space-between;
    }
    :last-child {
      justify-content: flex-end;
      padding-right: 1.2vw;
    }
  }
`;

export const Item = styled.p<{
  active: boolean;
}>`
  border: ${(props) =>
    props.active ? "1px solid #e9d9d8" : "1px solid transparent"};
  padding: 6px;
  cursor: pointer;
`;
