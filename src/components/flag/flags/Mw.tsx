import * as React from "react";

function SvgMw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mw_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mw_svg__b">
          <stop stopColor="#E42038" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mw_svg__c">
          <stop stopColor="#47B849" offset="0%" />
          <stop stopColor="#399E3B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mw_svg__a)" d="M0 0h15v5H0z" />
        <circle fill="url(#mw_svg__b)" cx={7.5} cy={5.5} r={3.5} />
        <path fill="url(#mw_svg__b)" d="M0 5h15v5H0z" />
        <path fill="url(#mw_svg__c)" d="M0 10h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgMw;
