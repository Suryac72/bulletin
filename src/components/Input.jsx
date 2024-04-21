import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const Input = ({
  placeHolder,
  name,
  register,
  errors,
  required,
  type,
  label,
  validationSchema
}) => {

  if (type === "file") {
    return (
      <div>
        <label htmlFor={name} className="font-bold mb-1">
          {label}
          {required && "*"}
        </label>
        <label
          htmlFor={name}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out w-full cursor-pointer flex items-center justify-center"
          style={{ minHeight: "40px" }} // Adjust height as needed
        >
          <IoMdCloudUpload className="mr-2" />
          {label}
          <input
            type={type}
            data-testid="upload-button"
            {...register(name, validationSchema)}
            className="hidden"
            id={name}
          />
        </label>
        {errors && errors[name]?.type === "required" && (
          <span className="text-red-500">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === "minLength" && (
          <span className="text-red-500">{errors[name]?.message}</span>
        )}
      </div>
    );
  }
  return (
    <div>
      <label htmlFor={name} className="font-bold mb-1">
        {label}
        {required && "*"}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder}
        name={name}
        type={type}
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === "required" && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default Input;
