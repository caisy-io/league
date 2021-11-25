import * as React from "react";

function SvgMd(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="md_svg__a">
          <stop stopColor="#EB1C43" offset="0%" />
          <stop stopColor="#CA1134" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="md_svg__b">
          <stop stopColor="#115BCB" offset="0%" />
          <stop stopColor="#094AAC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="md_svg__c">
          <stop stopColor="#FFD953" offset="0%" />
          <stop stopColor="#FFD130" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#md_svg__a)" d="M7 0h8v15H7z" />
        <path fill="url(#md_svg__b)" d="M0 0h5v15H0z" />
        <path fill="url(#md_svg__c)" d="M5 0h5v15H5z" />
        <path d="M6 6.5h1L7.5 5 8 6.5h1v3l-1.5 1-1.5-1v-3zm1 1V9h1V7.5H7z" fill="#AF7F59" fillRule="nonzero" />
      </g>
    </svg>
  );
}

export default SvgMd;
