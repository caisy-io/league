import * as React from "react";

function SvgBl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bl_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bl_svg__b">
          <stop stopColor="#216CD3" offset="0%" />
          <stop stopColor="#1557B2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bl_svg__d">
          <stop stopColor="#F7E14B" offset="0%" />
          <stop stopColor="#F7DF3E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bl_svg__g">
          <stop stopColor="#E12539" offset="0%" />
          <stop stopColor="#CA192C" offset="100%" />
        </linearGradient>
        <path
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
          id="bl_svg__c"
        />
        <path
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
          id="bl_svg__f"
        />
        <path
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
          id="bl_svg__i"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bl_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
          fill="url(#bl_svg__b)"
          transform="translate(3.5 5)"
        />
        <g transform="translate(3.5 5)">
          <mask id="bl_svg__e" fill="#fff">
            <use xlinkHref="#bl_svg__c" />
          </mask>
          <path
            d="M2 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zM2.5 6.5a.5.5 0 110-1 .5.5 0 010 1zM4 7a.5.5 0 110-1 .5.5 0 010 1zm1.5-.5a.5.5 0 110-1 .5.5 0 010 1z"
            fill="url(#bl_svg__d)"
            fillRule="nonzero"
            mask="url(#bl_svg__e)"
          />
        </g>
        <g transform="translate(3.5 5)">
          <mask id="bl_svg__h" fill="#fff">
            <use xlinkHref="#bl_svg__f" />
          </mask>
          <path fill="url(#bl_svg__g)" mask="url(#bl_svg__h)" d="M.5 3h7v2h-7z" />
        </g>
        <g transform="translate(3.5 5)">
          <mask id="bl_svg__j" fill="#fff">
            <use xlinkHref="#bl_svg__i" />
          </mask>
          <circle fill="#FFF" mask="url(#bl_svg__j)" cx={4} cy={4} r={1} />
        </g>
        <path
          d="M.5.5s2-.5 4-.5 4 .5 4 .5l-.5 2S6.25 2 4.5 2 1 2.5 1 2.5L.5.5z"
          fill="url(#bl_svg__d)"
          transform="translate(3 3)"
        />
        <path
          d="M7.5 4.5a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-4 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#5E5216"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgBl;
