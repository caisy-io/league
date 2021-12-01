import * as React from "react";

function SvgGh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gh_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gh_svg__b">
          <stop stopColor="#E71F37" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gh_svg__c">
          <stop stopColor="#118B56" offset="0%" />
          <stop stopColor="#0B6B41" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gh_svg__d">
          <stop stopColor="#FDD64C" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gh_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gh_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#gh_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#gh_svg__c)" d="M0 10h15v5H0z" />
        <path fill="url(#gh_svg__d)" d="M0 5h15v5H0z" />
        <path
          fill="url(#gh_svg__e)"
          d="M7.5 8.294L6.573 9l.352-1.145L6 7.145l1.144-.002L7.5 6l.356 1.143L9 7.145l-.925.71L8.427 9z"
        />
      </g>
    </svg>
  );
}

export default SvgGh;
