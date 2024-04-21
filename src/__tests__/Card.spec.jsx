import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

describe("Card Component", () => {
  const mockData = {
    heading: "Test Heading",
    date: "2022-04-21",
    imageUrl: "/test-image.jpg",
    description: "Test description",
  };

  it("renders card correctly with all elements", () => {
    render(
      <Card
        heading={mockData.heading}
        date={mockData.date}
        imageUrl={mockData.imageUrl}
        description={mockData.description}
      />
    );

    expect(screen.getByText(mockData.heading)).toBeInTheDocument();
    expect(screen.getByText(mockData.date)).toBeInTheDocument();
    expect(screen.getByAltText("Image")).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  it("renders card with fallback image when imageUrl is not provided", () => {
    render(
      <Card
        heading={mockData.heading}
        date={mockData.date}
        description={mockData.description}
      />
    );

    expect(screen.getByAltText("Image")).toBeInTheDocument();
  });
});
