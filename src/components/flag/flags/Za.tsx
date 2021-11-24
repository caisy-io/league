import * as React from "react";

function SvgZa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__c">
          <stop stopColor="#06A86E" offset="0%" />
          <stop stopColor="#007A4E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__e">
          <stop stopColor="#FFBF2E" offset="0%" />
          <stop stopColor="#FFB612" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__g">
          <stop stopColor="#F44E46" offset="0%" />
          <stop stopColor="#DF3931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="za_svg__h">
          <stop stopColor="#072CB4" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
        <path id="za_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="za_svg__d" fill="#fff">
          <use xlinkHref="#za_svg__a" />
        </mask>
        <use fill="url(#za_svg__b)" xlinkHref="#za_svg__a" />
        <path fill="url(#za_svg__c)" mask="url(#za_svg__d)" d="M0 0h21v15H0z" />
        <path fill="url(#za_svg__e)" mask="url(#za_svg__d)" d="M0 2l7 5.5L0 13z" />
        <path fill="url(#za_svg__f)" mask="url(#za_svg__d)" d="M-1 2.25L5.75 7.5-1 12.75z" />
        <path fill="#FFF" mask="url(#za_svg__d)" d="M9 6L2 0h19v6z" />
        <path fill="url(#za_svg__g)" mask="url(#za_svg__d)" d="M9.25 5l-6-5H21v5z" />
        <path fill="#FFF" mask="url(#za_svg__d)" d="M2 15h19V9H9z" />
        <path fill="url(#za_svg__h)" mask="url(#za_svg__d)" d="M3.25 15H21v-5H9.25z" />
      </g>
    </svg>
  );
}

export default SvgZa;
