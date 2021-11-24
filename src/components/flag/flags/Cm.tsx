import * as React from "react";

function SvgCm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cm_svg__a">
          <stop stopColor="#FFDC44" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cm_svg__b">
          <stop stopColor="#059170" offset="0%" />
          <stop stopColor="#007B5E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cm_svg__c">
          <stop stopColor="#E21A30" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cm_svg__d">
          <stop stopColor="#FFDC42" offset="0%" />
          <stop stopColor="#FDD217" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cm_svg__a)" d="M7 0h8v15H7z" />
        <path fill="url(#cm_svg__b)" d="M0 0h5v15H0z" />
        <path fill="url(#cm_svg__c)" d="M5 0h5v15H5z" />
        <path fill="url(#cm_svg__a)" d="M10 0h5v15h-5z" />
        <path
          fill="url(#cm_svg__d)"
          d="M7.5 8.305L6.571 9l.343-1.143L6 7.145l1.138-.01L7.5 6l.362 1.135L9 7.145l-.915.713L8.426 9z"
        />
      </g>
    </svg>
  );
}

export default SvgCm;
