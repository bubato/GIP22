import React from "react";
import styled from "styled-components";
function Input({ label, input, setInput, typeInput = "text" }) {
  return (
    <Wrapper>
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      <input
        type={typeInput}
        value={input}
        className="input_info"
        required
        // maxLength={15}
        minLength={5}
        onChange={(e) => setInput(e.target.value)}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* label {
    display: inline-block;
    margin-bottom: 2rem;
  } */
`;
export default Input;
