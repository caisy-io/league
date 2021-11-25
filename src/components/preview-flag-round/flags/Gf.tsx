import * as React from "react";

function SvgGf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gf_svg__a">
          <stop stopColor="#2DA446" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gf_svg__b">
          <stop stopColor="#FFE24A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gf_svg__c">
          <stop stopColor="#E7242C" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gf_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#gf_svg__b)" d="M0 0l15 15H0z" />
        <path
          fill="url(#gf_svg__c)"
          d="M6.972 8.322l-1.837 1.33.697-2.158L4 6.159l2.268-.004L6.972 4l.704 2.155 2.268.004-1.832 1.336.697 2.158z"
        />
      </g>
    </svg>
  );
}

export default SvgGf;
