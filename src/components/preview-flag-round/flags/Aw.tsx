import * as React from "react";

function SvgAw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="aw_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="aw_svg__b">
          <stop stopColor="#5098EA" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="aw_svg__c">
          <stop stopColor="#E82045" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#aw_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#aw_svg__b)" d="M0 0h15v15H0z" />
        <path d="M0 11h15v1H0v-1zm0-2h15v1H0V9z" fill="#F9D536" fillRule="nonzero" />
        <path
          d="M1.803 4.96a.5.5 0 010-.92l1.566-.67.671-1.567a.5.5 0 01.92 0l.67 1.566 1.567.671a.5.5 0 010 .92l-1.566.67-.671 1.567a.5.5 0 01-.92 0l-.67-1.566-1.567-.671z"
          fill="url(#aw_svg__a)"
        />
        <path fill="url(#aw_svg__c)" d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z" />
      </g>
    </svg>
  );
}

export default SvgAw;
