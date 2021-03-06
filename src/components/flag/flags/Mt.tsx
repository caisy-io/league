import * as React from "react";

function SvgMt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mt_svg__a">
          <stop stopColor="#DE233C" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mt_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mt_svg__a)" d="M8 0h7v15H8z" />
        <path fill="url(#mt_svg__b)" d="M0 0h8v15H0z" />
        <g transform="translate(1 1)">
          <path fill="#CCCCCD" d="M3 2V1H2v1H1v1h1v1h1V3h1V2z" />
          <path
            strokeOpacity={0.66}
            stroke="#7B716A"
            strokeWidth={0.5}
            d="M3.25 1.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5z"
          />
          <circle fill="#7B716A" cx={2.5} cy={2.5} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgMt;
