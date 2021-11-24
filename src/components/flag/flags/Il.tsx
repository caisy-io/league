import * as React from "react";

function SvgIl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="il_svg__a">
          <stop stopColor="#0E46D4" offset="0%" />
          <stop stopColor="#0538B9" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="il_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#il_svg__a)" fillRule="nonzero" />
        <path fill="url(#il_svg__b)" d="M0 3h15v9H0z" />
        <g stroke="#093EC5" strokeWidth={0.5}>
          <path d="M4.575 9.25L7.5 3.985l2.925 5.265z" />
          <path d="M4.575 5.75L7.5 11.015l2.925-5.265h-5.85z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgIl;
