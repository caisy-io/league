import * as React from "react";

function SvgKe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ke_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ke_svg__b">
          <stop stopColor="#018301" offset="0%" />
          <stop stopColor="#006700" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ke_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ke_svg__d">
          <stop stopColor="#DC0808" offset="0%" />
          <stop stopColor="#BC0000" offset="100%" />
        </linearGradient>
        <path d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z" id="ke_svg__e" />
        <path d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z" id="ke_svg__g" />
        <path d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z" id="ke_svg__i" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ke_svg__a)" d="M0 0h15v4H0z" />
        <path fill="url(#ke_svg__b)" d="M0 11h15v4H0z" />
        <path fill="url(#ke_svg__c)" d="M0 4h15v7H0z" />
        <path fill="url(#ke_svg__d)" d="M0 5h15v5H0z" />
        <path d="M7.5 12.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S5 4.462 5 7.5c0 3.038 1.5 5 2.5 5z" fill="#BC0000" />
        <g transform="translate(5 2)">
          <mask id="ke_svg__f" fill="#fff">
            <use xlinkHref="#ke_svg__e" />
          </mask>
          <ellipse fill="url(#ke_svg__a)" mask="url(#ke_svg__f)" cx={-1.5} cy={5.5} rx={2.5} ry={5.5} />
        </g>
        <g transform="translate(5 2)">
          <mask id="ke_svg__h" fill="#fff">
            <use xlinkHref="#ke_svg__g" />
          </mask>
          <ellipse fill="url(#ke_svg__a)" mask="url(#ke_svg__h)" cx={6.5} cy={5.5} rx={2.5} ry={5.5} />
        </g>
        <g transform="translate(5 2)">
          <mask id="ke_svg__j" fill="#fff">
            <use xlinkHref="#ke_svg__i" />
          </mask>
          <path
            d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
            fill="url(#ke_svg__c)"
            fillRule="nonzero"
            mask="url(#ke_svg__j)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgKe;
