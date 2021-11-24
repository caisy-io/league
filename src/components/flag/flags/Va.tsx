import * as React from "react";

function SvgVa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="va_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="va_svg__c">
          <stop stopColor="#FDE048" offset="0%" />
          <stop stopColor="#FFDF32" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="va_svg__e">
          <stop stopColor="#CDCCCC" offset="0%" />
          <stop stopColor="#E4E4E4" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="va_svg__f">
          <stop stopColor="#CD9D25" offset="0%" />
          <stop stopColor="#EBB93A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="va_svg__g">
          <stop stopColor="#F5252C" offset="0%" />
          <stop stopColor="#F6151C" offset="100%" />
        </linearGradient>
        <path id="va_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="va_svg__d" fill="#fff">
          <use xlinkHref="#va_svg__a" />
        </mask>
        <use fill="url(#va_svg__b)" xlinkHref="#va_svg__a" />
        <path fill="url(#va_svg__c)" mask="url(#va_svg__d)" d="M0 0h15v15H0z" />
        <path fill="url(#va_svg__b)" mask="url(#va_svg__d)" d="M4 0h11v15H4z" />
        <path
          d="M12.682 8.025a1.5 1.5 0 10-2.415-.414L8.086 9.793l-.354-.354-.353-.353-.707.707.353.353.707.708.354.353.353-.353 2.536-2.536a1.5 1.5 0 001.707-.293z"
          fill="url(#va_svg__e)"
          mask="url(#va_svg__d)"
          transform="matrix(1 0 0 -1 0 16.672)"
        />
        <path
          d="M8.025 8.32a1.5 1.5 0 11.708-.708l2.181 2.182.354-.354.353-.353.707.707-.353.353-.707.708-.354.353-.353-.353L8.025 8.32z"
          fill="url(#va_svg__f)"
          mask="url(#va_svg__d)"
          transform="matrix(1 0 0 -1 0 16.673)"
        />
        <path
          d="M9.5 5C8.672 5 8 4.776 8 4.5S8.672 4 9.5 4s1.5.224 1.5.5-.672.5-1.5.5zm0-2.5c-.414 0-.75-.112-.75-.25S9.086 2 9.5 2s.75.112.75.25-.336.25-.75.25zm0 1.167c-.552 0-1-.15-1-.334 0-.184.448-.333 1-.333s1 .15 1 .333c0 .184-.448.334-1 .334z"
          fill="url(#va_svg__f)"
          fillRule="nonzero"
          mask="url(#va_svg__d)"
        />
        <path
          d="M7.026 10.658c.08.242.247.576.527.912.48.576 1.13.93 1.947.93.817 0 1.467-.354 1.947-.93.28-.336.447-.67.527-.912a.5.5 0 10-.948-.316 1.98 1.98 0 01-.348.588c-.301.362-.683.57-1.178.57-.495 0-.877-.208-1.178-.57a1.98 1.98 0 01-.348-.588.5.5 0 10-.948.316z"
          fill="url(#va_svg__g)"
          mask="url(#va_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgVa;
