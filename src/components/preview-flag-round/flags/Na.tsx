import * as React from "react";

function SvgNa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="na_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="na_svg__d">
          <stop stopColor="#0C4799" offset="0%" />
          <stop stopColor="#05387E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="na_svg__e">
          <stop stopColor="#FFD243" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="na_svg__f">
          <stop stopColor="#1BAC55" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="na_svg__g">
          <stop stopColor="#E52347" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <path id="na_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="na_svg__c" fill="#fff">
          <use xlinkHref="#na_svg__a" />
        </mask>
        <use fill="url(#na_svg__b)" xlinkHref="#na_svg__a" />
        <g mask="url(#na_svg__c)">
          <path fill="#000" d="M.001 10.004l21-10h-21z" />
          <path fill="url(#na_svg__d)" d="M.121 10.304l21-10h-21z" transform="translate(-.12 -.3)" />
        </g>
        <g mask="url(#na_svg__c)">
          <path
            fill="#000"
            d="M3.501 4.504l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
          />
          <path
            fill="url(#na_svg__e)"
            d="M2.621 3.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
            transform="translate(.88 .7)"
          />
        </g>
        <g mask="url(#na_svg__c)">
          <path fill="#000" d="M.001 15.004h21v-10z" />
          <path fill="url(#na_svg__f)" d="M.121 10.304h21v-10z" transform="translate(-.12 4.7)" />
        </g>
        <g mask="url(#na_svg__c)">
          <path fill="#000" d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z" />
          <path
            fill="url(#na_svg__b)"
            d="M4.433 19.304L24.75 6.609 20.81.304.493 12.999z"
            transform="translate(-2.12 -2.3)"
          />
        </g>
        <path fill="url(#na_svg__g)" mask="url(#na_svg__c)" d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z" />
      </g>
    </svg>
  );
}

export default SvgNa;
