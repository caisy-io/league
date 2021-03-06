import * as React from "react";

function SvgCh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="ch_svg__a">
          <stop stopColor="red" offset="0%" />
          <stop stopColor="#FF3131" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ch_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ch_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M6 9H3.256A.255.255 0 013 8.744V6.256C3 6.115 3.114 6 3.256 6H6V3.256C6 3.115 6.114 3 6.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 01-.256.256H9v2.744a.255.255 0 01-.256.256H6.256A.255.255 0 016 11.744V9z"
          fill="url(#ch_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgCh;
