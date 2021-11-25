import * as React from "react";

function SvgCl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cl_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cl_svg__b">
          <stop stopColor="#EA3B2E" offset="0%" />
          <stop stopColor="#D52B1E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cl_svg__c">
          <stop stopColor="#0B48C2" offset="0%" />
          <stop stopColor="#0239A7" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cl_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#cl_svg__b)" d="M0 7h15v8H0z" />
        <path fill="url(#cl_svg__a)" d="M0 0h15v7H0z" />
        <path fill="url(#cl_svg__c)" d="M0 0h7v7H0z" />
        <path
          fill="url(#cl_svg__a)"
          d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
        />
      </g>
    </svg>
  );
}

export default SvgCl;
