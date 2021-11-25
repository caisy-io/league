import * as React from "react";

function SvgGbZet(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-zet_svg__b">
          <stop stopColor="#187AE5" offset="0%" />
          <stop stopColor="#0F68C9" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-zet_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <path id="gb-zet_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gb-zet_svg__d" fill="#fff">
          <use xlinkHref="#gb-zet_svg__a" />
        </mask>
        <use fill="url(#gb-zet_svg__b)" xlinkHref="#gb-zet_svg__a" />
        <path fill="url(#gb-zet_svg__c)" mask="url(#gb-zet_svg__d)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
      </g>
    </svg>
  );
}

export default SvgGbZet;
