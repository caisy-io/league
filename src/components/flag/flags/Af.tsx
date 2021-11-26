import * as React from "react";

function SvgAf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="af_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="af_svg__b">
          <stop stopColor="#1AB11F" offset="0%" />
          <stop stopColor="#149818" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="af_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="af_svg__d">
          <stop stopColor="#DC0D18" offset="0%" />
          <stop stopColor="#BE0711" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#af_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#af_svg__b)" d="M7 0h8v15H7z" />
        <path fill="url(#af_svg__c)" d="M0 0h5v15H0z" />
        <path fill="url(#af_svg__d)" d="M5 0h5v15H5z" />
        <path
          d="M6 7.2a1.5 1.5 0 00.748 1.298.3.3 0 00.301-.519A.9.9 0 016.6 7.2a.3.3 0 00-.6 0zm2.308 1.264C8.739 8.19 9 7.712 9 7.2a.3.3 0 00-.6 0 .9.9 0 01-.416.759.3.3 0 10.324.505z"
          fill="#FFF"
          fillRule="nonzero"
          opacity={0.75}
        />
        <circle fillOpacity={0.5} fill="#FFF" cx={7.5} cy={6.9} r={1} />
      </g>
    </svg>
  );
}

export default SvgAf;
