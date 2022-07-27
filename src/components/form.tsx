import React, { useState } from "react";
import { useTypeDispatch, useTypeSelector } from "../hooks/redux_hook";
import { addTodo } from "../store/reducer";

import { Content, Add } from "../styles/form_style";

const Form = () => {
  const dispatch = useTypeDispatch();

  const [text, setText] = useState("");

  console.log(text);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <Content>
      <i className="fas fa-chevron-down fa-2x" onClick={handleAction}></i>
      <Add>
        <input
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Add>
    </Content>
  );
};

export default Form;
