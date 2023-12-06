import React from "react";

export const PrimaryInput = ({ ...rest }: InputTypes) => {
  return (
    <div className="my-2">
      <label
        htmlFor={rest.id}
        className="text-border_purple text-[1rem] font-[500] mb-6"
      >
        {rest.label}
      </label>
      {rest.textarea ? (
        <textarea
          id={rest.id}
          placeholder={rest.placeholder}
          className={`${rest.className} px-4 text-primary w-full rounded-md min-h-[131px]
           bg-input_bg border-[1px] border-input_border`}
        />
      ) : (
        <input
          id={rest.id}
          type={rest.type || "text"}
          placeholder={rest.placeholder}
          className={`${rest.className} px-4 text-primary w-full rounded-md h-[56px] bg-input_bg border-[1px] 
      border-input_border`}
          {...rest.register}
        />
      )}
    </div>
  );
};
