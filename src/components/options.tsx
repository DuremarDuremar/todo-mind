import React, { FC } from "react";

import { Content, Item } from "../styles/options_style";
import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";
import { clearTodo } from "../store/reducer";

interface IProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const Options: FC<IProps> = ({ view, setView }) => {
  const todos = useTypeSelector((state) => state.todos);
  const dispatch = useTypeDispatch();

  const buttons = ["All", "Active", "Completed"].map((item) => (
    <Item
      key={item}
      active={item === view ? true : false}
      onClick={() => setView(item)}
    >
      {item}
    </Item>
  ));

  return (
    <Content>
      <div>
        {todos.filter((item) => item.completed === false).length} items left
      </div>
      <div>{buttons}</div>
      <div
        onClick={() => {
          dispatch(clearTodo());
        }}
      >
        Clear Completed
      </div>
    </Content>
  );
};

export default Options;
