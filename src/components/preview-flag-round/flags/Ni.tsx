import * as React from "react";

function SvgNi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ni_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ni_svg__b">
          <stop stopColor="#1A78D6" offset="0%" />
          <stop stopColor="#106AC4" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ni_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#ni_svg__b)" fillRule="nonzero" />
        <path fill="url(#ni_svg__a)" d="M0 5h15v5H0z" />
        <path
          d="M7.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z"
          fill="#DBCD92"
          fillRule="nonzero"
        />
        <path fill="#9CDDEE" d="M7.5 6.5l1 2h-2z" />
      </g>
    </svg>
  );
}

export default SvgNi;
