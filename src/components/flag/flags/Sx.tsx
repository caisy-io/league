import * as React from "react";

function SvgSx(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__a">
          <stop stopColor="#0740AA" offset="0%" />
          <stop stopColor="#012F85" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__b">
          <stop stopColor="#F02C33" offset="0%" />
          <stop stopColor="#D82027" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__d">
          <stop stopColor="#E72C33" offset="0%" />
          <stop stopColor="#D82027" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__e">
          <stop stopColor="#78C1F0" offset="0%" />
          <stop stopColor="#67B1E0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sx_svg__f">
          <stop stopColor="#F7E14B" offset="0%" />
          <stop stopColor="#F7DF3E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sx_svg__a)" d="M0 7h15v8H0z" />
        <path fill="url(#sx_svg__b)" d="M0 0h15v7H0z" />
        <path fill="url(#sx_svg__c)" d="M0 0l7 7.5L0 15z" />
        <g transform="translate(0 4)">
          <path
            d="M1.071 3V1.88a.768.768 0 01.206-.533.696.696 0 01.505-.222h1.436c.393 0 .71.343.71.754V3c0 .634-.274 1.085-.716 1.348a1.588 1.588 0 01-.736.226 1.596 1.596 0 01-.688-.226C1.346 4.085 1.07 3.634 1.07 3z"
            fill="url(#sx_svg__d)"
          />
          <path
            d="M1.429 3V1.88c0-.21.154-.38.353-.38h1.436c.195 0 .353.174.353.38V3c0 1.125-1.071 1.2-1.071 1.2S1.429 4.125 1.429 3z"
            fill="url(#sx_svg__e)"
          />
          <path fill="#FFF" d="M2.143 2.625L2.5 2.25l.357.375v.75h-.714z" />
          <path
            d="M.715 4.776a2.373 2.373 0 001.785.849c.677 0 1.368-.336 1.8-.872a.388.388 0 00-.047-.52.345.345 0 00-.497.035c-.318.38-.775.6-1.256.607a1.673 1.673 0 01-1.245-.59.348.348 0 00-.338-.123.363.363 0 00-.27.246.39.39 0 00.068.368z"
            fill="#F9D835"
          />
          <circle fill="url(#sx_svg__f)" cx={2.5} cy={1.125} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgSx;
