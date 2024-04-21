import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-4 max-w-screen-2xl ${className}`} data-testid="container">
      <div className="py-8">{children}</div>
    </div>
  );
};

export default Container;
