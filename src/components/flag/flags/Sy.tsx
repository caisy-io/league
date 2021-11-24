import * as React from "react";

function SvgSy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sy_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sy_svg__b">
          <stop stopColor="#E32139" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sy_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sy_svg__d">
          <stop stopColor="#128A49" offset="0%" />
          <stop stopColor="#0F7A40" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sy_svg__a)" d="M0 10h15v5H0z" />
        <path fill="url(#sy_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#sy_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M3.902 8.32l-1.176.798.396-1.365L2 6.882l1.42-.045.482-1.337.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798zm7 0l-1.176.798.396-1.365L9 6.882l1.42-.045.482-1.337.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798z"
          fill="url(#sy_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgSy;
