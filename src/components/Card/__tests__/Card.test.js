import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "..";

describe("Card", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={10}
        liked={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render correctly with liked", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={10}
        liked={true}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render correctly with 0 claps", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={0}
        liked={false}

      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should toggle like on click", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={10}
        liked={false}
      />
    );
    
    const like = container.querySelector(".like");
    expect(like.src).toContain("heart-black.svg");
    fireEvent.click(like);
    expect(like.src).toContain("heart-red.svg");
    fireEvent.click(like);
    expect(like.src).toContain("heart-black.svg");
  });

  it("should increment claps on click", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={10}
        liked={false}
      />
    );
    const clap = container.querySelector(".clap");
    const clapButton = container.querySelector(".clap-button");
    expect(clap.innerHTML).toContain("10");
    fireEvent.click(clapButton);
    expect(clap.innerHTML).toContain("11");
  });

  it("should decrement claps on second click", () => {
    const { container } = render(
      <Card
        image="abstract.png"
        date="2nd Januray, 2018"
        readingTime="2 mins"
        title="The future of abstract art and the culture ..."
        description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your..."
        claps={10}
        liked={false}
      />
    );
    const clap = container.querySelector(".clap");
    const clapButton = container.querySelector(".clap-button");
    expect(clap.innerHTML).toContain("10");
    fireEvent.click(clapButton);
    expect(clap.innerHTML).toContain("11");
    fireEvent.click(clapButton);
    expect(clap.innerHTML).toContain("10");
  });
});
