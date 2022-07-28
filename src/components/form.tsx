import React, { FC, useState } from "react";
import { useTypeDispatch } from "../hooks/redux_hook";
import { addTodo } from "../store/reducer";

import { Content, Add } from "../styles/form_style";

const Form: FC = () => {
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
      <div>
        <i
          className="fas fa-chevron-down fa-lg"
          onClick={handleAction}
          role="button"
        ></i>
      </div>
      <Add>
        <input
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAction()}
          aria-label="input"
        />
      </Add>
    </Content>
  );
};

export default Form;
