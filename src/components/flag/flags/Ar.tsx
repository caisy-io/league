import * as React from "react";

function SvgAr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ar_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ar_svg__b">
          <stop stopColor="#88BBE8" offset="0%" />
          <stop stopColor="#76ADDD" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ar_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#ar_svg__b)" fillRule="nonzero" />
        <path fill="url(#ar_svg__a)" d="M0 5h15v5H0z" />
        <g transform="translate(5 5)">
          <path d="M2.5 4.5a2 2 0 110-4 2 2 0 010 4z" fill="#DB7A2C" />
          <circle fill="#F4B32E" cx={2.5} cy={2.5} r={1.5} />
        </g>
      </g>
    </svg>
  );
}

export default SvgAr;
