import * as React from "react";

function SvgAe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ae_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ae_svg__b">
          <stop stopColor="#12833B" offset="0%" />
          <stop stopColor="#0D7332" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ae_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ae_svg__d">
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ae_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ae_svg__b)" d="M4 0h11v5H4z" />
        <path fill="url(#ae_svg__c)" d="M4 10h11v5H4z" />
        <path fill="url(#ae_svg__a)" d="M4 5h11v5H4z" />
        <path fill="url(#ae_svg__d)" d="M0 0h4v15H0z" />
      </g>
    </svg>
  );
}

export default SvgAe;
