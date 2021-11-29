import * as React from "react";

function SvgMc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mc_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mc_svg__b">
          <stop stopColor="#EA233B" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mc_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#mc_svg__b)" d="M0 0h15v8H0z" />
        <path fill="url(#mc_svg__a)" d="M0 7.5h15V15H0z" />
      </g>
    </svg>
  );
}

export default SvgMc;
