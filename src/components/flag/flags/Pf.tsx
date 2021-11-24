import * as React from "react";

function SvgPf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__a">
          <stop stopColor="#E02639" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__b">
          <stop stopColor="#DC2235" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__e">
          <stop stopColor="#FFA135" offset="0%" />
          <stop stopColor="#FD9C2D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__j">
          <stop stopColor="#DF2034" offset="0%" />
          <stop stopColor="#CA1A2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pf_svg__m">
          <stop stopColor="#0B4BAD" offset="0%" />
          <stop stopColor="#08429A" offset="100%" />
        </linearGradient>
        <circle id="pf_svg__d" cx={2.5} cy={2.5} r={2.5} />
        <circle id="pf_svg__g" cx={2.5} cy={2.5} r={2.5} />
        <circle id="pf_svg__i" cx={2.5} cy={2.5} r={2.5} />
        <circle id="pf_svg__l" cx={2.5} cy={2.5} r={2.5} />
        <circle id="pf_svg__o" cx={2.5} cy={2.5} r={2.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pf_svg__a)" d="M0 0h15v4H0z" />
        <path fill="url(#pf_svg__b)" d="M0 11h15v4H0z" />
        <path fill="url(#pf_svg__c)" d="M0 4h15v7H0z" />
        <g transform="translate(5 5)">
          <mask id="pf_svg__f" fill="#fff">
            <use xlinkHref="#pf_svg__d" />
          </mask>
          <path fill="url(#pf_svg__e)" mask="url(#pf_svg__f)" d="M0 0h5v2.5H0z" />
        </g>
        <g transform="translate(5 5)">
          <mask id="pf_svg__h" fill="#fff">
            <use xlinkHref="#pf_svg__g" />
          </mask>
          <path fill="#FFF" mask="url(#pf_svg__h)" d="M1 1.5h3l-.5 1h-2z" />
        </g>
        <g transform="translate(5 5)">
          <mask id="pf_svg__k" fill="#fff">
            <use xlinkHref="#pf_svg__i" />
          </mask>
          <path
            d="M2 0h1v1.495A.508.508 0 012.5 2a.495.495 0 01-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 011 2V1z"
            fill="url(#pf_svg__j)"
            fillRule="nonzero"
            mask="url(#pf_svg__k)"
          />
        </g>
        <g transform="translate(5 5)">
          <mask id="pf_svg__n" fill="#fff">
            <use xlinkHref="#pf_svg__l" />
          </mask>
          <path fill="url(#pf_svg__m)" mask="url(#pf_svg__n)" d="M0 3h5v2H0z" />
        </g>
        <g transform="translate(5 5)">
          <mask id="pf_svg__p" fill="#fff">
            <use xlinkHref="#pf_svg__o" />
          </mask>
          <path fill="#FFF" mask="url(#pf_svg__p)" d="M0 3.5h5V4H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgPf;
