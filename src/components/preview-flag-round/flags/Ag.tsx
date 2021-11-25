import * as React from "react";

function SvgAg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ag_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ag_svg__d">
          <stop stopColor="#E2243B" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ag_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ag_svg__g">
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ag_svg__j">
          <stop stopColor="#1984D8" offset="0%" />
          <stop stopColor="#1175C4" offset="100%" />
        </linearGradient>
        <path id="ag_svg__a" d="M0 0h15v15H0z" />
        <path id="ag_svg__f" d="M0 0h21L10.5 15z" />
        <path id="ag_svg__i" d="M0 0h21L10.5 15z" />
        <path id="ag_svg__l" d="M0 0h21L10.5 15z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ag_svg__c" fill="#fff">
          <use xlinkHref="#ag_svg__a" />
        </mask>
        <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#ag_svg__a" />
        <path fill="url(#ag_svg__b)" mask="url(#ag_svg__c)" d="M-3 0h21v15H-3z" />
        <path
          d="M5.5 7a2 2 0 00.998 1.731m2.078-.045C9.132 8.331 9.5 7.708 9.5 7"
          opacity={0.75}
          mask="url(#ag_svg__c)"
        />
        <ellipse fillOpacity={0.5} fill="#FFF" mask="url(#ag_svg__c)" cx={7.5} cy={6.5} rx={1} ry={1.5} />
        <path fill="url(#ag_svg__d)" mask="url(#ag_svg__c)" d="M-3 0h21v15H-3z" />
        <g mask="url(#ag_svg__c)" fill="url(#ag_svg__e)">
          <path d="M-3 0h21L7.5 15z" />
        </g>
        <g mask="url(#ag_svg__c)">
          <g transform="translate(-3)">
            <mask id="ag_svg__h" fill="#fff">
              <use xlinkHref="#ag_svg__f" />
            </mask>
            <path
              fill="url(#ag_svg__g)"
              mask="url(#ag_svg__h)"
              d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
            />
          </g>
        </g>
        <g mask="url(#ag_svg__c)">
          <g transform="translate(-3)">
            <mask id="ag_svg__k" fill="#fff">
              <use xlinkHref="#ag_svg__i" />
            </mask>
            <path fill="url(#ag_svg__j)" mask="url(#ag_svg__k)" d="M0 6h21v4H0z" />
          </g>
        </g>
        <g mask="url(#ag_svg__c)">
          <g transform="translate(-3)">
            <mask id="ag_svg__m" fill="#fff">
              <use xlinkHref="#ag_svg__l" />
            </mask>
            <path fill="url(#ag_svg__b)" mask="url(#ag_svg__m)" d="M0 10h21v5H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgAg;
