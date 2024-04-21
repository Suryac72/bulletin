import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("renders button correctly with title", () => {
    render(<Button title="Click me" />);

    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies provided className", () => {
    render(<Button title="Click me" className="custom-class" />);

    const button = screen.getByText("Click me");
    expect(button).toHaveClass("custom-class");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" onClick={handleClick} />);

    const button = screen.getByText("Click me");
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef();
    render(<Button title="Click me" ref={ref} />);

    const button = screen.getByText("Click me");
    expect(button).toEqual(ref.current);
  });
});
