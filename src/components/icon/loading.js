import React from "react"

export default ({ style }) => (
  <svg viewBox="0 0 32 32" style={style}>
    <path
      opacity=".25"
      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
      fill="rgb(52, 152, 219)"
    ></path>
    <path
      fill="rgb(52, 152, 219)"
      d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 16 16"
        to="360 16 16"
        dur="0.8s"
        repeatCount="indefinite"
      ></animateTransform>
    </path>
  </svg>
)
