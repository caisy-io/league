import * as React from "react";

function SvgKn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kn_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kn_svg__c">
          <stop stopColor="#1EC160" offset="0%" />
          <stop stopColor="#169E4D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kn_svg__e">
          <stop stopColor="#DF2A40" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="16.742%" x2="50%" y2="82.422%" id="kn_svg__f">
          <stop stopColor="#FFD956" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kn_svg__g">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <path id="kn_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="kn_svg__d" fill="#fff">
          <use xlinkHref="#kn_svg__a" />
        </mask>
        <use fill="url(#kn_svg__b)" xlinkHref="#kn_svg__a" />
        <path fill="url(#kn_svg__c)" mask="url(#kn_svg__d)" d="M-.999 10l21-10h-21z" />
        <path fill="url(#kn_svg__e)" mask="url(#kn_svg__d)" d="M-.999 15h21V5z" />
        <path fill="url(#kn_svg__f)" mask="url(#kn_svg__d)" d="M-.41 19L24.182 3.632 19.413-4-5.18 11.368z" />
        <path fill="url(#kn_svg__g)" mask="url(#kn_svg__d)" d="M-1.47 17.304L23.122 1.936l-2.65-4.24L-4.12 13.064z" />
        <path
          d="M11.099 6.819l-.481.786-.313-.872-.873-.23.708-.575L10.08 5l.75.517.839-.345-.245.895.576.715-.901.037zm-5.432 3.395l-.48.786-.313-.872L4 9.898l.708-.575-.059-.928.75.517.838-.345-.244.895.575.715-.9.037z"
          fill="url(#kn_svg__b)"
          fillRule="nonzero"
          mask="url(#kn_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgKn;
