import * as React from "react";

function SvgGr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gr_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gr_svg__c">
          <stop stopColor="#1C6DC1" offset="0%" />
          <stop stopColor="#1660AD" offset="100%" />
        </linearGradient>
        <path id="gr_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gr_svg__d" fill="#fff">
          <use xlinkHref="#gr_svg__a" />
        </mask>
        <use fill="url(#gr_svg__b)" xlinkHref="#gr_svg__a" />
        <path
          d="M0 0h4v4H0V0zm6 0h4v4H6V0zm4 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zm6-6h4v4H6V6zM0 6h4v4H0V6z"
          fill="url(#gr_svg__c)"
          fillRule="nonzero"
          mask="url(#gr_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgGr;
