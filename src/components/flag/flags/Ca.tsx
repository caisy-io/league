import * as React from "react";

function SvgCa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ca_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ca_svg__b">
          <stop stopColor="#FF3131" offset="0%" />
          <stop stopColor="red" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ca_svg__a)" d="M0 0h15v15H0z" />
        <path d="M10.714 0H15v15h-4.286V0zM0 0h4.286v15H0V0z" fill="url(#ca_svg__b)" fillRule="nonzero" />
        <path fill="url(#ca_svg__a)" d="M4.286 0h6.428v15H4.286z" />
        <path
          d="M8.339 7.376l.465-.466a.18.18 0 01.254.005l.228.228.714-.357-.357.714.228.229a.176.176 0 01.006.251l-.948.949H7.857L7.68 10h-.36l-.178-1.071H6.07l-.948-.949a.18.18 0 01.006-.252l.228-.228L5 6.786l.714.357.229-.229a.178.178 0 01.253-.004l.465.466c.069.068.109.045.089-.054l-.321-1.608.714.357L7.5 5l.357 1.071.714-.357-.321 1.608c-.02.102.02.122.089.054z"
          fill="url(#ca_svg__b)"
        />
      </g>
    </svg>
  );
}

export default SvgCa;
