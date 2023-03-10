import React from "react";
import { render } from "@testing-library/react";
import Header from "../../Header";

describe("Header", () => {
  it("should render when component is mounted", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
