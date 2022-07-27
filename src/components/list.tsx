import React, { FC, useState, useEffect } from "react";

import { useTypeSelector, useTypeDispatch } from "../hooks/redux_hook";
import { toggleTodo } from "../store/reducer";
import { Content, Item } from "../styles/list_style";
import { todoItem } from "../store/reducer";

interface IProps {
  view: string;
}

const List: FC<IProps> = ({ view }) => {
  const todos = useTypeSelector((state) => state.todos);
  const dispatch = useTypeDispatch();

  const [items, setItems] = useState([] as todoItem[]);

  useEffect(() => {
    if (view === "All") {
      setItems(todos);
    }
    if (view === "Active") {
      setItems(todos.filter((item) => !item.completed));
    }
    if (view === "Completed") {
      setItems(todos.filter((item) => item.completed));
    }
  }, [todos, view]);

  return (
    <Content>
      {items.length
        ? items.map((item) => (
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
