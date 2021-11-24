import * as React from "react";

function SvgTo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="to_svg__a">
          <stop stopColor="#E20F1B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="to_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="to_svg__c">
          <stop stopColor="#DF101B" offset="0%" />
          <stop stopColor="#C00711" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#to_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#to_svg__b)" d="M0 0h12v8H0z" />
        <path
          d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 005 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 003.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 007 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 008.742 3H7z"
          fill="url(#to_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgTo;
