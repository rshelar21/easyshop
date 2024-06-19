import React from "react";

interface InputWrapperProps {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: string | undefined;
  touched: boolean | undefined;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  value,
  name,
  type,
  placeholder,
  onChange,
  required = false,
  label,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="formRow">
      <label htmlFor="">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
        onBlur={onBlur}
      />
      {error && touched && <p className="error">{error}</p>}
    </div>
  );
};

export default InputWrapper;
