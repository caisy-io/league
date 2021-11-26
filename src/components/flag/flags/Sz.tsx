import * as React from "react";

function SvgSz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sz_svg__a">
          <stop stopColor="#486BCA" offset="0%" />
          <stop stopColor="#3E5FBA" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sz_svg__b">
          <stop stopColor="#FFDF20" offset="0%" />
          <stop stopColor="#FFDA00" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sz_svg__c">
          <stop stopColor="#CF1615" offset="0%" />
          <stop stopColor="#B20D0C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sz_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sz_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <ellipse id="sz_svg__e" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
        <ellipse id="sz_svg__h" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
        <ellipse id="sz_svg__j" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#sz_svg__a)" fillRule="nonzero" />
        <path fill="url(#sz_svg__b)" d="M0 3h15v9H0z" />
        <path fill="url(#sz_svg__c)" d="M0 4h15v7H0z" />
        <ellipse cx={4.5} cy={2.5} rx={4.5} ry={2.5} fill="url(#sz_svg__d)" transform="translate(3 5)" />
        <g transform="translate(3 5)">
          <mask id="sz_svg__g" fill="#fff">
            <use xlinkHref="#sz_svg__e" />
          </mask>
          <path fill="url(#sz_svg__f)" mask="url(#sz_svg__g)" transform="matrix(-1 0 0 1 5 0)" d="M0 0h5v5H1z" />
        </g>
        <g transform="translate(3 5)">
          <mask id="sz_svg__i" fill="#fff">
            <use xlinkHref="#sz_svg__h" />
          </mask>
          <circle fill="#1A1A1A" mask="url(#sz_svg__i)" cx={5.5} cy={2.5} r={1} />
        </g>
        <g transform="translate(3 5)">
          <mask id="sz_svg__k" fill="#fff">
            <use xlinkHref="#sz_svg__j" />
          </mask>
          <circle fill="#F6F6F6" mask="url(#sz_svg__k)" cx={3.5} cy={2.5} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgSz;
