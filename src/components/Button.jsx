import React, { forwardRef } from "react";

const Button = forwardRef(({ title, className, ...rest }, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
      className={`select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs sm:text-sm md:text-base font-bold  text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full ${className}`}
    >
      {title}
    </button>
  );
});

export default Button;
