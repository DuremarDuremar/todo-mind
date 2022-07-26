import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}
::-webkit-scrollbar-thumb {
    background-color: #0F2027;
}
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  background-color: #f5f5f5;
  padding: 0 8px;
  width: 100%;
  max-width: 700px;
  height: 90%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #f5f5f5,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #f5f5f5,
    0 20px 1px -9px rgba(0, 0, 0, 0.15);

  h1 {
    color: #e9d9d8;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 300;
    font-size: 12vw;
    text-align: center;
  }
`;
