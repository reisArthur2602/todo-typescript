import { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>

export const TextField = ({ type, placeholder, value, onChange } : TextFieldProps ) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
      className="w-full outline-none bg-slate-200 p-3 rounded-xl"
    />
  );
};
