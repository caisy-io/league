import * as React from "react";

function SvgJo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jo_svg__a">
          <stop stopColor="#199E56" offset="0%" />
          <stop stopColor="#0F7A40" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jo_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jo_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jo_svg__d">
          <stop stopColor="#E6223A" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#jo_svg__a)" d="M0 10h15v5H0z" />
        <path fill="url(#jo_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#jo_svg__c)" d="M0 5h15v5H0z" />
        <path fill="url(#jo_svg__d)" d="M0 0l7 7.5L0 15z" />
        <path
          fill="url(#jo_svg__c)"
          d="M2.5 8.368L1.833 9l.066-.93L1 7.93l.749-.526-.451-.81.869.273L2.5 6l.333.867.87-.274-.453.81.75.527-.899.14.067.93z"
        />
      </g>
    </svg>
  );
}

export default SvgJo;
