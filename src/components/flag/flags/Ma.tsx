import * as React from "react";

function SvgMa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ma_svg__a">
          <stop stopColor="#E33B44" offset="0%" />
          <stop stopColor="#C02A32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ma_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M7.5 9.915L4.719 12l1.026-3.426L3 6.438l3.414-.032L7.5 3l1.085 3.405L12 6.438 9.256 8.574 10.28 12 7.5 9.915zm0-1.358l.835.626-.308-1.028.824-.641-1.025-.011L7.5 6.48l-.326 1.023-1.025.009.824.64-.308 1.03.835-.626z"
          fill="#0A6135"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgMa;
