import * as React from "react";

function SvgNc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nc_svg__a">
          <stop stopColor="#094CC7" offset="0%" />
          <stop stopColor="#003CAB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nc_svg__b">
          <stop stopColor="#2AAD55" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nc_svg__c">
          <stop stopColor="#F65D55" offset="0%" />
          <stop stopColor="#E9443C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nc_svg__d">
          <stop stopColor="#FAE749" offset="0%" />
          <stop stopColor="#FBE533" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nc_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#nc_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#nc_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#nc_svg__c)" d="M0 5h15v5H0z" />
        <g transform="translate(4 4)">
          <circle fill="url(#nc_svg__d)" cx={3.5} cy={3.5} r={3.5} />
          <path
            d="M3.092 2.211a.5.5 0 10.514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM3.5 6.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 110-1 .5.5 0 010 1zm0-1a.5.5 0 110-1 .5.5 0 010 1z"
            fill="url(#nc_svg__e)"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgNc;
