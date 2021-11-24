import * as React from "react";

function SvgKy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ky_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ky_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ky_svg__h">
          <stop stopColor="#125FBA" offset="0%" />
          <stop stopColor="#0C50A1" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ky_svg__j">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="ky_svg__a" d="M0 0h15v15H0z" />
        <path d="M0 2.188V0h3.333v2.188c0 1.562-1.666 2.187-1.666 2.187S0 3.75 0 2.187z" id="ky_svg__e" />
        <path d="M0 2.188V0h3.333v2.188c0 1.562-1.666 2.187-1.666 2.187S0 3.75 0 2.187z" id="ky_svg__g" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ky_svg__c" fill="#fff">
          <use xlinkHref="#ky_svg__a" />
        </mask>
        <use fill="url(#ky_svg__b)" xlinkHref="#ky_svg__a" />
        <g mask="url(#ky_svg__c)">
          <g transform="translate(9.65 9)">
            <path
              d="M0 2.188V0h3.333v2.188c0 1.562-1.666 2.187-1.666 2.187S0 3.75 0 2.187z"
              fill="url(#ky_svg__d)"
              transform="translate(0 .625)"
            />
            <circle fill="#FAD051" cx={1.667} cy={0.625} r={1} />
            <g transform="translate(0 .625)">
              <mask id="ky_svg__f" fill="#fff">
                <use xlinkHref="#ky_svg__e" />
              </mask>
              <path fill="#CF142C" mask="url(#ky_svg__f)" d="M0 0h3.333v.625H0z" />
            </g>
            <g transform="translate(0 .625)">
              <mask id="ky_svg__i" fill="#fff">
                <use xlinkHref="#ky_svg__g" />
              </mask>
              <path
                d="M0 3.75h3.333v.625H0V3.75zM0 2.5h3.333v.625H0V2.5zm0-1.25h3.333v.625H0V1.25z"
                fill="url(#ky_svg__h)"
                fillRule="nonzero"
                mask="url(#ky_svg__i)"
              />
            </g>
          </g>
        </g>
        <g mask="url(#ky_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#ky_svg__d)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#ky_svg__j)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#ky_svg__d)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#ky_svg__j)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgKy;
