import * as React from "react";

function SvgPw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pw_svg__a">
          <stop stopColor="#65C6EE" offset="0%" />
          <stop stopColor="#4FAED5" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pw_svg__b">
          <stop stopColor="#FFE044" offset="0%" />
          <stop stopColor="#FFDD32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pw_svg__a)" d="M0 0h15v15H0z" />
        <circle fill="url(#pw_svg__b)" cx={7.5} cy={7.5} r={4.5} />
      </g>
    </svg>
  );
}

export default SvgPw;
