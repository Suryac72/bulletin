import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "@/components/Input";

describe("Input Component", () => {
  it("renders input field correctly", () => {
    render(
      <Input
        label="Username"
        name="username"
        register={() => {}}
        errors={{}}
        required={false}
        type="text"
        validationSchema={{ required: "Username is required" }}
      />
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders file input field correctly", () => {
    render(
      <Input
        label="Upload Image"
        name="image"
        register={() => {}}
        errors={{}}
        required={true}
        type="file"
        validationSchema={{ required: "Image is required" }}
      />
    );

    expect(screen.getByLabelText("Upload Image*")).toBeInTheDocument();
    expect(screen.getByTestId("upload-button")).toBeInTheDocument();
    expect(screen.getByTestId("upload-button")).toHaveClass("hidden");
  });

  it("handles file input change", async () => {
    const mockRegister = jest.fn();
    render(
      <Input
        label="Upload Image"
        name="image"
        register={mockRegister}
        errors={{}}
        required={true}
        type="file"
        validationSchema={{ required: "Image is required" }}
      />
    );

    const file = new File(["image content"], "image.png", { type: "image/png" });
    const fileInput = screen.getByLabelText("Upload Image*");
    userEvent.upload(fileInput, file);

    expect(mockRegister).toHaveBeenCalled();
  });
});
