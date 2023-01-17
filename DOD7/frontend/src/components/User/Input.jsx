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
        // maxLength={15}
        minLength={5}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Input;
