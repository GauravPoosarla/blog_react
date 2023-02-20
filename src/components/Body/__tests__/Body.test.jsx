import React from "react";
import { render } from "@testing-library/react";

import Body from "..";

describe("Body", () => {
  // 1
  it("should render when component is mounted", () => {
    const { container } = render(<Body />);
    expect(container).toMatchSnapshot();
  });
});
