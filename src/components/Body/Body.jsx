import React from "react";
import "./Body.css";
import Card from "../Card/Card";
import data from "../../assets/mockData/index.json";

export default function Body(props) {
  return <div className="cards">{props.children}</div>;
}
