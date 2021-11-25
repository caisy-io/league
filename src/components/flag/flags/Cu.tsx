import * as React from "react";

function SvgCu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cu_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cu_svg__b">
          <stop stopColor="#0B389F" offset="0%" />
          <stop stopColor="#052E8D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cu_svg__c">
          <stop stopColor="#E12A43" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cu_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v3H0V0zm0 6h15v3H0V6z" fill="url(#cu_svg__b)" fillRule="nonzero" />
        <path fill="url(#cu_svg__a)" d="M0 3h15v3H0z" />
        <path fill="url(#cu_svg__b)" d="M0 12h15v3H0z" />
        <path fill="url(#cu_svg__a)" d="M0 9h15v3H0z" />
        <path fill="url(#cu_svg__c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#cu_svg__a)"
          d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
        />
      </g>
    </svg>
  );
}

export default SvgCu;
