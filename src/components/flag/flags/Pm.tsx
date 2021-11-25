import * as React from "react";

function SvgPm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__a">
          <stop stopColor="#26A7DC" offset="0%" />
          <stop stopColor="#1B94C6" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__b">
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FFCE2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__d">
          <stop stopColor="#F03633" offset="0%" />
          <stop stopColor="#D82A28" offset="100%" />
        </linearGradient>
        <linearGradient x1="82.842%" y1="18.137%" x2="20.426%" y2="78.479%" id="pm_svg__f">
          <stop stopColor="#2AA854" offset="0%" />
          <stop stopColor="#219447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__j">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__k">
          <stop stopColor="#D7181D" offset="0%" />
          <stop stopColor="#C60E13" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pm_svg__l">
          <stop stopColor="#FBCD3F" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
        <path id="pm_svg__e" d="M0 0h7v5H0z" />
        <path id="pm_svg__h" d="M0 0h7v5H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pm_svg__a)" d="M0 15h15V0H0z" />
        <path
          d="M4.996 2.057C5.612 1.906 6 1.865 6 2.4c0 .994-1.343 1.8-3 1.8s-3-.806-3-1.8c0-.534.388-.494 1.004-.343a2.468 2.468 0 01-.096-.337C.736.91.99.17 1.476.065c.486-.103 1.02.47 1.192 1.28.082.382.068.749-.02 1.04.234.02.47.02.704 0a2.126 2.126 0 01-.02-1.04c.172-.81.705-1.383 1.192-1.28.486.104.74.845.568 1.655a2.468 2.468 0 01-.096.337z"
          fill="url(#pm_svg__b)"
          transform="translate(8 5)"
        />
        <path
          d="M4.066 5.968a.3.3 0 00.268 0l1.2-.6a.3.3 0 00-.268-.536L4.2 5.364l-1.066-.533a.3.3 0 00-.268 0L1.8 5.364.734 4.831a.3.3 0 00-.268.537l1.2.6a.3.3 0 00.268 0L3 5.436l1.066.533z"
          fill="url(#pm_svg__c)"
          transform="translate(8 5)"
        />
        <path d="M0 0h7v5H0z" fill="url(#pm_svg__d)" />
        <mask id="pm_svg__g" fill="#fff">
          <use xlinkHref="#pm_svg__e" />
        </mask>
        <path
          fill="url(#pm_svg__f)"
          mask="url(#pm_svg__g)"
          transform="rotate(-45 3.5 2.5)"
          d="M4 2v-4H3v4h-4v1h4v4h1V3h4V2z"
        />
        <mask id="pm_svg__i" fill="#fff">
          <use xlinkHref="#pm_svg__h" />
        </mask>
        <path fill="url(#pm_svg__c)" mask="url(#pm_svg__i)" d="M4 2v-3H3v3H0v1h3v3h1V3h3V2z" />
        <path fill="url(#pm_svg__c)" d="M0 5h7v5H0z" />
        <path
          d="M1.5 7a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-1 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#pm_svg__j)"
          fillRule="nonzero"
        />
        <path fill="url(#pm_svg__k)" d="M0 10h7v5H0z" />
        <path
          d="M3.5 12c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5zm0 2c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5z"
          fill="url(#pm_svg__l)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgPm;
