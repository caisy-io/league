import * as React from "react";

function SvgJp(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jp_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jp_svg__b">
          <stop stopColor="#D81441" offset="0%" />
          <stop stopColor="#BB0831" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#jp_svg__a)" d="M0 0h15v15H0z" />
        <circle fill="url(#jp_svg__b)" cx={7.5} cy={7.5} r={4.5} />
      </g>
    </svg>
  );
}

export default SvgJp;
