import React from "react";

interface IProps {
  handleSelectPrice: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  type: string;
  label: string;
  id: string;
  checkBox: any | string;
}
const FormCheckbox = ({
  handleSelectPrice,
  type,
  label,
  id,
  checkBox,
}: IProps) => {
  return (
    <>
      <div className="flex items-center gap-[10px] pt-1">
        <input
          type="radio"
          className="text-gray-600"
          id={id}
          name={type}
          value={id}
          onChange={(e) => handleSelectPrice(e, type)}
          checked={checkBox === id}
        />
        <label htmlFor={id} className="text-gray-600 mb-1 ">
          {label}
        </label>
      </div>
    </>
  );
};

export default FormCheckbox;
