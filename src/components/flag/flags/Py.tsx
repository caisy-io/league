import * as React from "react";

function SvgPy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="py_svg__a">
          <stop stopColor="#E33F39" offset="0%" />
          <stop stopColor="#D32E28" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="py_svg__b">
          <stop stopColor="#124BBA" offset="0%" />
          <stop stopColor="#073DA6" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="py_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#py_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#py_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#py_svg__c)" d="M0 5h15v5H0z" />
        <g transform="translate(5 5)">
          <path
            d="M2.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z"
            fill="#398153"
            fillRule="nonzero"
          />
          <circle fill="#E5CF58" cx={2.5} cy={2.5} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgPy;
