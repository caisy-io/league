import * as React from "react";

function SvgBf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bf_svg__a">
          <stop stopColor="#00B051" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bf_svg__b">
          <stop stopColor="#FA494B" offset="0%" />
          <stop stopColor="#F02B2D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bf_svg__a)" d="M0 7.5h15V15H0z" />
        <path fill="url(#bf_svg__b)" d="M0 0h15v7.5H0z" />
        <path
          fill="#FDD216"
          d="M7.49 9.101L5.333 10.64l.795-2.526L4 6.535l2.648-.024L7.49 4l.842 2.511 2.648.025-2.128 1.577.795 2.526z"
        />
      </g>
    </svg>
  );
}

export default SvgBf;
