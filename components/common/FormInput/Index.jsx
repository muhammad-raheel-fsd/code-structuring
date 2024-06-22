import Cn from "@/utils/twCn";
import React from "react";

const FormInput = ({ label, id, className, errorMessage, ...props }) => {
  console.log("PROPS ======= ", props);
  return (
    <>
      {label && (
        <label className="block w-full px-3 py-2" htmlFor={id}>
          {label}
          {props.required && (
            <span className="inline-block text-red-600">*</span>
          )}
        </label>
      )}
      <input
        {...props}
        className={Cn(
          "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
      />
      {errorMessage && (
        <span className="w-full inline-block px-3 py-2 text-red-600">
          {errorMessage}
        </span>
      )}
    </>
  );
};

export default FormInput;
