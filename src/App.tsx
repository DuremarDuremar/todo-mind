import React, { FC } from "react";

import Form from "./components/form";
import List from "./components/list";
import { Global, Wrapper, Content } from "./styles/app_style";

const App: FC = () => {
  return (
    <>
      <Global />
      <Wrapper>
        <Content>
          <h1>todos</h1>
          <Form />
          <List />
        </Content>
      </Wrapper>
    </>
  );
};

export default App;
