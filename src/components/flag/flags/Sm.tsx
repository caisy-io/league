import * as React from "react";

function SvgSm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sm_svg__a">
          <stop stopColor="#7CCCF5" offset="0%" />
          <stop stopColor="#62B7E3" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sm_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sm_svg__a)" d="M0 7.5h15V15H0z" />
        <path fill="url(#sm_svg__b)" d="M0 0h15v7.5H0z" />
        <g transform="translate(5 5)">
          <path
            d="M0 2a2.5 2.5 0 001.247 2.164.5.5 0 00.502-.865A1.499 1.499 0 011 2a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 005 2a.5.5 0 00-1 0 1.5 1.5 0 01-.693 1.265.5.5 0 10.539.842z"
            fill="#445F42"
            fillRule="nonzero"
          />
          <ellipse fill="#D89F3D" cx={2.5} cy={1.5} rx={1} ry={1.5} />
        </g>
      </g>
    </svg>
  );
}

export default SvgSm;
