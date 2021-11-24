import * as React from "react";

function SvgBe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="be_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="be_svg__b">
          <stop stopColor="#FF4453" offset="0%" />
          <stop stopColor="#EE2A39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="be_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="be_svg__d">
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#be_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#be_svg__b)" d="M7 0h8v15H7z" />
        <path fill="url(#be_svg__c)" d="M0 0h5v15H0z" />
        <path fill="url(#be_svg__d)" d="M5 0h5v15H5z" />
      </g>
    </svg>
  );
}

export default SvgBe;
