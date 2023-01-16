import React from "react";
import styled from "styled-components";
function Input({ label, input, setInput }) {
  return (
    <Wrapper>
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      <input
        type="text"
        value={input}
        className="input_info"
        onChange={(e) => setInput(e.target.value)}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  label {
    display: inline-block;
    margin-bottom: 2rem;
  }
`;
export default Input;
