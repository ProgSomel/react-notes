import React from "react";
class Icon {
  constructor(innerSVG, attributes) {
    this.innerSVG = innerSVG;
    this.attributes = attributes;
  }
}

export const icons = {
  search: new Icon(
    (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    ),
    { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }
  ),

  cart: new Icon(
    (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    ),
    { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }
  ),

  men: new Icon(
    (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }
  ),
};
