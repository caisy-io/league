import * as React from "react";

function SvgOm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="om_svg__a">
          <stop stopColor="#138E16" offset="0%" />
          <stop stopColor="#0F7F12" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="om_svg__b">
          <stop stopColor="#ED2B35" offset="0%" />
          <stop stopColor="#D91B25" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="om_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#om_svg__a)" d="M0 10h15v5H0z" />
        <path fill="url(#om_svg__b)" d="M0 15h5v-5h10V5H5V0H0z" />
        <path
          fill="url(#om_svg__c)"
          fillRule="nonzero"
          d="M5 0h10v5H5zM2.5 3l-.668 1 .346-1.16L1 2.93l1.1-.446-.803-.89 1.025.605L2.5 1l.178 1.199 1.025-.605-.803.89L4 2.93l-1.18-.088L3.168 4z"
        />
      </g>
    </svg>
  );
}

export default SvgOm;
