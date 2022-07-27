import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
  margin: 0 1.5vw;
  overflow: auto;
  max-height: 280px;
`;

export const Item = styled.div<{
  completed: boolean;
}>`
  padding-left: 12px;
  height: calc(2vw + 32px);
  display: flex;
  align-items: center;

  &:first-child {
    box-shadow: none;
  }
  box-shadow: 0px -5px 5px -5px #dadce0;

  button {
    background-color: #fff;
    width: 3.3vw;
    height: 3.3vw;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    border: 1px solid #dadce0;
  }
  i {
    color: #04aa6b;
    width: 100%;
  }
  span {
    text-decoration: ${(props) => props.completed && "line-through"};
    color: ${(props) => props.completed && "#dadce0"};
    font-size: calc(1vw + 15px);
    padding-left: 18px;
  }
`;
