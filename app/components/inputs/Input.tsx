"use client";

import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <FaRupeeSign
          size={16}
          className="text-gray-700 absolute top-[17px] left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`
      peer w-full p-2 pt-4 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
        formatPrice ? "pl-9" : "pl-4"
      } ${errors[id] ? "border-rose-500" : "border-neutral-300"}${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        } `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-[12px] z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-[18px]"
        }
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-65
      peer-focus:-translate-y-3
       ${errors[id] ? "text-rose-500" : "text-zinc-400"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
