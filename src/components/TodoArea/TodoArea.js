import React from "react";
import styled from "styled-components";

const TodoAreaContainer = styled.div`
  width: 100%;
  background: #ebf1f5;
  flex: 1;
  padding: 0 15px;
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
  }
`;
const TodoArea = () => (
  <TodoAreaContainer>
    <div className="wrapper">test</div>
  </TodoAreaContainer>
);

export default TodoArea;
