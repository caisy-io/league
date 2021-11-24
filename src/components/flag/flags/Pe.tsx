import * as React from "react";

function SvgPe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pe_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pe_svg__b">
          <stop stopColor="#E82438" offset="0%" />
          <stop stopColor="#D7172B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pe_svg__a)" d="M0 0h15v15H0z" />
        <path d="M7.143 0H15v15H7.143V0zM0 0h5v15H0V0z" fill="url(#pe_svg__b)" fillRule="nonzero" />
        <path fill="url(#pe_svg__a)" d="M5 0h5v15H5z" />
      </g>
    </svg>
  );
}

export default SvgPe;
