import React from "react";
function Input({ label, typeInput = "text", register, value }) {
  return (
    <div>
      <label htmlFor="" className="label_info">
        {label} :
      </label>
      <input
        type={typeInput}
        className="input_info"
        {...register(value, { required: true, minLength: 5 })}
      />
    </div>
  );
}

export default Input;
