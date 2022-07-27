import React, { FC } from "react";

import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";
import { toggleTodo } from "../store/reducer";
import { Content } from "../styles/list_style";

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
            <div key={item.id}>
              <button onClick={() => dispatch(toggleTodo(item.id))}>
                <i className="fas fa-check fa-2x"></i>
              </button>
              <span>{item.text}</span>
            </div>
          ))
        : null}
    </Content>
  );
};

export default List;
