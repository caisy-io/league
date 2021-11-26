import * as React from "react";

function SvgAt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="at_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="at_svg__b">
          <stop stopColor="#F64253" offset="0%" />
          <stop stopColor="#EA2D3F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#at_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#at_svg__b)" fillRule="nonzero" />
        <path fill="url(#at_svg__a)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgAt;
