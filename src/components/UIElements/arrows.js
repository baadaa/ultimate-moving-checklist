import React from "react";

const RightArrow = ({ click }) => (
  <button
    style={{
      width: "15px",
      height: "15px",
      border: "none",
      padding: "0",
      outline: "none",
      background: "transparent"
    }}
    onClick={() => click("+")}
  >
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8L0 15V0z" fill="#FFF" fillRule="evenodd" />
    </svg>
  </button>
);

const LeftArrow = ({ click }) => (
  <button
    style={{
      width: "15px",
      height: "15px",
      border: "none",
      padding: "0",
      outline: "none",
      background: "transparent"
    }}
    onClick={() => click("-")}
  >
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8l15-8v15z" fill="#FFF" fillRule="evenodd" />
    </svg>
  </button>
);

const DownArrow = ({ click }) => (
  <button
    style={{
      width: "15px",
      height: "15px",
      border: "none",
      padding: "0",
      outline: "none",
      background: "transparent"
    }}
    onClick={click}
  >
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 15L0 0h15z" fill="#FFF" fillRule="evenodd" />
    </svg>
  </button>
);

export { RightArrow, LeftArrow, DownArrow };
