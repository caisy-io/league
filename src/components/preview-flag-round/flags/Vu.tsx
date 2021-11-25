import * as React from "react";

function SvgVu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vu_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vu_svg__c">
          <stop stopColor="#27AB53" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vu_svg__e">
          <stop stopColor="#EC2547" offset="0%" />
          <stop stopColor="#CE1A39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vu_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vu_svg__g">
          <stop stopColor="#FFD449" offset="0%" />
          <stop stopColor="#FDCD34" offset="100%" />
        </linearGradient>
        <path id="vu_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="vu_svg__d" fill="#fff">
          <use xlinkHref="#vu_svg__a" />
        </mask>
        <use fill="url(#vu_svg__b)" xlinkHref="#vu_svg__a" />
        <path fill="url(#vu_svg__c)" mask="url(#vu_svg__d)" d="M0 9h15v6H0z" />
        <path fill="url(#vu_svg__e)" mask="url(#vu_svg__d)" d="M0 0h21v6H0z" />
        <path fill="url(#vu_svg__f)" mask="url(#vu_svg__d)" d="M8 6h13v3H8l-8 6V0z" />
        <path
          fill="url(#vu_svg__g)"
          mask="url(#vu_svg__d)"
          d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H15v1H7.867L0 13.9l-.4.3-.6-.8.4-.3z"
        />
        <path
          d="M2.5 8.5A1.5 1.5 0 114 7c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75C2.776 8 3 7.276 3 7a.5.5 0 00-1 0c0 .276.224 1 .5.75z"
          fill="url(#vu_svg__g)"
          fillRule="nonzero"
          mask="url(#vu_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgVu;
