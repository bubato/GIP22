import React from "react";
function Input({ label, input, setInput, typeInput = "text" }) {
  return (
    <div>
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      <input
        type={typeInput}
        value={input}
        className="input_info"
        required
        minLength="8"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Input;
