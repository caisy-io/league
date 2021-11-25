import * as React from "react";

function SvgBy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="by_svg__a">
          <stop stopColor="#E54252" offset="0%" />
          <stop stopColor="#C63442" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="by_svg__b">
          <stop stopColor="#5CBE6B" offset="0%" />
          <stop stopColor="#4EA55B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="by_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#by_svg__a)" d="M0 0h15v10H0z" />
        <path fill="url(#by_svg__b)" d="M0 10h15v5H0z" />
        <path
          fill="url(#by_svg__c)"
          d="M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75z"
        />
        <path
          d="M.5 1.5l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5z"
          fill="url(#by_svg__a)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgBy;
