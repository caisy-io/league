import * as React from "react";

function SvgGl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gl_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gl_svg__d">
          <stop stopColor="#E82245" offset="0%" />
          <stop stopColor="#CC1838" offset="100%" />
        </linearGradient>
        <path id="gl_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gl_svg__c" fill="#fff">
          <use xlinkHref="#gl_svg__a" />
        </mask>
        <use fill="url(#gl_svg__b)" xlinkHref="#gl_svg__a" />
        <g mask="url(#gl_svg__c)" fill="#000">
          <path d="M0 0h15v8H0z" />
        </g>
        <g mask="url(#gl_svg__c)" fill="url(#gl_svg__b)">
          <path d="M0 0h15v8H0z" />
        </g>
        <path d="M3 8H0v7h21V8H11a4 4 0 10-8 0z" fill="url(#gl_svg__d)" mask="url(#gl_svg__c)" />
        <path d="M3 8a4 4 0 108 0H3z" fill="url(#gl_svg__b)" mask="url(#gl_svg__c)" />
      </g>
    </svg>
  );
}

export default SvgGl;
