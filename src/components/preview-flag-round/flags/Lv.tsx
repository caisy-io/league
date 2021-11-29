import * as React from "react";

function SvgLv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lv_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lv_svg__b">
          <stop stopColor="#B9414B" offset="0%" />
          <stop stopColor="#9D323B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#lv_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v6H0V0zm0 9h15v6H0V9z" fill="url(#lv_svg__b)" fillRule="nonzero" />
        <path fill="url(#lv_svg__a)" d="M0 6h15v3H0z" />
      </g>
    </svg>
  );
}

export default SvgLv;
