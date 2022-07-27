import React, { FC } from "react";

import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";
import { toggleTodo } from "../store/reducer";
import { Content, Item } from "../styles/list_style";

interface IProps {
  view: string;
}

const List: FC<IProps> = ({ view }) => {
  const todos = useTypeSelector((state) => state.todos);
  const dispatch = useTypeDispatch();

  return (
    <Content>
      {todos.length
        ? todos.map((item) => (
            <Item key={item.id} completed={item.completed}>
              <button onClick={() => dispatch(toggleTodo(item.id))}>
                {item.completed && <i className="fas fa-check fa-2x"></i>}
              </button>
              <span>{item.text}</span>
            </Item>
          ))
        : null}
    </Content>
  );
};

export default List;
