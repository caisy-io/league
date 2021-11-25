import * as React from "react";

function SvgIn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="in_svg__a">
          <stop stopColor="#FFA44A" offset="0%" />
          <stop stopColor="#FF9934" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="in_svg__b">
          <stop stopColor="#1A9F0B" offset="0%" />
          <stop stopColor="#138806" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="in_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#in_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#in_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#in_svg__c)" d="M0 5h15v5H0z" />
        <circle fillOpacity={0.15} fill="#181A93" cx={7.5} cy={7.5} r={1.5} />
        <path
          d="M7.5 9.5a2 2 0 110-4 2 2 0 010 4zm0-.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="#181A93"
          fillRule="nonzero"
        />
        <circle fill="#181A93" cx={7.5} cy={7.5} r={1} />
      </g>
    </svg>
  );
}

export default SvgIn;
