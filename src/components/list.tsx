import React from "react";
import { useTypeSelector } from "../hooks/redux_hook";

import { Content } from "../styles/list_style";

const List = () => {
  const todos = useTypeSelector((state) => state.todos);

  return (
    <Content>
      {todos.length &&
        todos.map((item) => (
          <div key={item.id}>
            <button>
              <i className="fas fa-check fa-2x"></i>
            </button>
            <span>{item.text}</span>
          </div>
        ))}
    </Content>
  );
};

export default List;
