import React, { FC } from "react";

import { Content } from "../styles/options_style";

interface IProps {
  view: string;
}

const Options: FC<IProps> = ({ view }) => {
  return (
    <Content>
      <div>items left</div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>Clear Completed</div>
    </Content>
  );
};

export default Options;
