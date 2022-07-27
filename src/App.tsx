import React, { FC, useState } from "react";

import Form from "./components/form";
import List from "./components/list";
import Options from "./components/options";
import { Global, Wrapper, Content } from "./styles/app_style";

const App: FC = () => {
  const [view, setView] = useState("All");

  return (
    <>
      <Global />
      <Wrapper>
        <Content>
          <h1>todos</h1>
          <Form />
          <List view={view} />
          <Options view={view} />
        </Content>
      </Wrapper>
    </>
  );
};

export default App;
