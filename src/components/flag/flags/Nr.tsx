import * as React from "react";

function SvgNr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nr_svg__a">
          <stop stopColor="#0744A7" offset="0%" />
          <stop stopColor="#00307D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nr_svg__b">
          <stop stopColor="#FCC747" offset="0%" />
          <stop stopColor="#FEC539" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nr_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#nr_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#nr_svg__b)" d="M0 6h15v2H0z" />
        <path
          fill="url(#nr_svg__c)"
          d="M5.5 12.25l-.773 1.128.038-1.367-1.288.458.834-1.083L3 11l1.311-.386-.834-1.083 1.288.458-.038-1.367L5.5 9.75l.773-1.128-.038 1.367 1.288-.458-.834 1.083L8 11l-1.311.386.834 1.083-1.288-.458.038 1.367z"
        />
      </g>
    </svg>
  );
}

export default SvgNr;
