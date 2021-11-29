import * as React from "react";

function SvgVn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vn_svg__a">
          <stop stopColor="#EA403F" offset="0%" />
          <stop stopColor="#D82827" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vn_svg__b">
          <stop stopColor="#FFFE4E" offset="0%" />
          <stop stopColor="#FFFE38" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#vn_svg__a)" d="M0 0h15v15H0z" />
        <path
          fill="url(#vn_svg__b)"
          d="M7.28 9.255l-2.645 1.886.976-3.099L3 6.11l3.247-.029L7.28 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"
        />
      </g>
    </svg>
  );
}

export default SvgVn;
