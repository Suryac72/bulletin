import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "@/components/Container";

describe("Container Component", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <div data-testid="child">Child Component</div>
      </Container>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const className = "custom-class";
    render(
      <Container className={className}>
        <div>Child Component</div>
      </Container>
    );

    const container = screen.getByTestId("container");
    expect(container).toHaveClass(className);
  });
});
