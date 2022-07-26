import React, { useState } from "react";

import { Content, Add } from "../styles/form_style";

const Form = () => {
  const [text, setText] = useState("");

  return (
    <Content>
      <i className="fas fa-chevron-down fa-2x"></i>
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
