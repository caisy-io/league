import * as React from "react";

function SvgDz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dz_svg__a">
          <stop stopColor="#048345" offset="0%" />
          <stop stopColor="#04753E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dz_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dz_svg__c">
          <stop stopColor="#E81B42" offset="0%" />
          <stop stopColor="#D20F34" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#dz_svg__a)" d="M0 0h8v15H0z" />
        <path fill="url(#dz_svg__b)" d="M8 0h7v15H8z" />
        <g transform="translate(3 3)" fill="url(#dz_svg__c)">
          <path d="M7 5.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L7 2.5l.458 1.369 1.444.013-1.16.859.434 1.377z" />
          <path d="M7.26 1.214A4.204 4.204 0 004.313 0C1.931 0 0 2.015 0 4.5S1.931 9 4.313 9c1.14 0 2.176-.461 2.947-1.214a4.112 4.112 0 01-1.77.396c-2.166 0-3.922-1.649-3.922-3.682S3.324.818 5.489.818c.638 0 1.24.143 1.771.396z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgDz;
