import * as React from "react";

function SvgMx(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mx_svg__a">
          <stop stopColor="#E3283E" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mx_svg__b">
          <stop stopColor="#128A60" offset="0%" />
          <stop stopColor="#0B6848" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mx_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mx_svg__a)" d="M7 0h8v15H7z" />
        <path fill="url(#mx_svg__b)" d="M0 0h5v15H0z" />
        <path fill="url(#mx_svg__c)" d="M5 0h5v15H5z" />
        <g transform="translate(6 6)">
          <path
            d="M0 1.2a1.5 1.5 0 00.748 1.298.3.3 0 00.301-.519A.9.9 0 01.6 1.2a.3.3 0 00-.6 0zm2.308 1.264C2.739 2.19 3 1.712 3 1.2a.3.3 0 00-.6 0 .9.9 0 01-.416.759.3.3 0 10.324.505z"
            fill="#8C9157"
            fillRule="nonzero"
          />
          <circle fill="#C59262" cx={1.5} cy={0.9} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgMx;
