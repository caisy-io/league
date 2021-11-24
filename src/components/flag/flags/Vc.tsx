import * as React from "react";

function SvgVc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vc_svg__a">
          <stop stopColor="#08C47A" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vc_svg__b">
          <stop stopColor="#0C87E1" offset="0%" />
          <stop stopColor="#0073C7" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vc_svg__c">
          <stop stopColor="#FFD147" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vc_svg__d">
          <stop stopColor="#00C778" offset="0%" />
          <stop stopColor="#009F60" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#vc_svg__a)" d="M11 0h4v15h-4z" />
        <path fill="url(#vc_svg__b)" d="M0 0h4v15H0z" />
        <path fill="url(#vc_svg__c)" d="M4 0h7v15H4z" />
        <path
          d="M7.857 6.1L8.93 4 10 6.1 8.929 8.2 7.857 6.1zM5 6.1L6.071 4l1.072 2.1L6.07 8.2 5 6.1zm1.429 2.8L7.5 6.8l1.071 2.1L7.5 11 6.429 8.9z"
          fill="url(#vc_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgVc;
