import React from "react";

function Input({ label, typeInput = "text", value, register }) {
  return (
    <div>
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      <input
        type={typeInput}
        className="input_info"
        {...register(value)}
        minLength={5}
        required
      />
    </div>
  );
}

export default Input;
