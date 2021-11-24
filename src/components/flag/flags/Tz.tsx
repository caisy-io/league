import * as React from "react";

function SvgTz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tz_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tz_svg__c">
          <stop stopColor="#33CC4D" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tz_svg__e">
          <stop stopColor="#2DAFE4" offset="0%" />
          <stop stopColor="#1BA4DC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tz_svg__f">
          <stop stopColor="#FFD84F" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tz_svg__g">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <path id="tz_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="tz_svg__d" fill="#fff">
          <use xlinkHref="#tz_svg__a" />
        </mask>
        <use fill="url(#tz_svg__b)" xlinkHref="#tz_svg__a" />
        <path fill="url(#tz_svg__c)" mask="url(#tz_svg__d)" d="M-1.999 10.004l21-10h-21z" />
        <path fill="url(#tz_svg__e)" mask="url(#tz_svg__d)" d="M-1.999 15.004h21v-10z" />
        <path fill="url(#tz_svg__f)" mask="url(#tz_svg__d)" d="M.313 17.004L20.63 4.309l-3.94-6.305-20.317 12.695z" />
        <path fill="url(#tz_svg__g)" mask="url(#tz_svg__d)" d="M-2.47 17.308L22.123 1.94l-2.65-4.24L-5.12 13.068z" />
      </g>
    </svg>
  );
}

export default SvgTz;
