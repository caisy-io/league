import * as React from "react";

function SvgPl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pl_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pl_svg__b">
          <stop stopColor="#EB2A50" offset="0%" />
          <stop stopColor="#DA1B40" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pl_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#pl_svg__b)" d="M0 7.5h15V15H0z" />
        <path fill="url(#pl_svg__a)" d="M0 0h15v7.5H0z" />
      </g>
    </svg>
  );
}

export default SvgPl;
