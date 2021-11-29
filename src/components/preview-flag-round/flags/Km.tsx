import * as React from "react";

function SvgKm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="km_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="km_svg__b">
          <stop stopColor="#FFCB49" offset="0%" />
          <stop stopColor="#FFC638" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="km_svg__c">
          <stop stopColor="#DC1D34" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="km_svg__d">
          <stop stopColor="#4985D4" offset="0%" />
          <stop stopColor="#3D77C2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="km_svg__e">
          <stop stopColor="#4BA343" offset="0%" />
          <stop stopColor="#408D39" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#km_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#km_svg__b)" d="M0 0h15v3.75H0z" />
        <path fill="url(#km_svg__c)" d="M0 7.5h15v3.75H0z" />
        <path fill="url(#km_svg__d)" d="M0 11.25h15V15H0z" />
        <path fill="url(#km_svg__a)" d="M0 3.75h15V7.5H0z" />
        <path fill="url(#km_svg__e)" d="M0 15l7-7.5L0 0z" />
        <path
          d="M3.25 5.063c-.73-.208-1.498.11-1.928.795a2.183 2.183 0 000 2.284c.43.686 1.199 1.003 1.928.795C2.454 8.709 1.899 7.912 1.899 7c0-.912.555-1.709 1.35-1.937zM3.7 6c-.166 0-.3-.15-.3-.334 0-.184.134-.333.3-.333.166 0 .3.15.3.333C4 5.85 3.866 6 3.7 6zm0 1.333c-.166 0-.3-.15-.3-.333 0-.184.134-.334.3-.334.166 0 .3.15.3.334 0 .184-.134.333-.3.333zm0 1.333c-.166 0-.3-.149-.3-.333 0-.184.134-.333.3-.333.166 0 .3.149.3.333 0 .184-.134.333-.3.333z"
          fill="url(#km_svg__a)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgKm;
