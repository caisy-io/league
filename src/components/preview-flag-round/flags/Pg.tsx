import * as React from "react";

function SvgPg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pg_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pg_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pg_svg__c">
          <stop stopColor="#E8283F" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pg_svg__d">
          <stop stopColor="#FFD84E" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pg_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#pg_svg__b)" d="M0 0h15v15H0z" />
        <path fill="url(#pg_svg__c)" d="M0 0h15v15z" />
        <path
          d="M4.17 11.86l-.48.14.14-.477-.14-.477.48.14.477-.14-.14.477.14.477-.478-.14zm0-4.046l-.48.14.14-.477L3.69 7l.48.14.477-.14-.14.477.14.477-.478-.14zM2.477 9.5L2 9.64l.14-.477L2 8.686l.478.14.478-.14-.14.477.14.477-.478-.14zm3.044-.337l-.478.14.14-.477-.14-.477.478.14.478-.14-.14.477.14.476-.478-.14z"
          fill="url(#pg_svg__a)"
          fillRule="nonzero"
        />
        <path
          d="M9.908 6.28a.424.424 0 01-.188-.325v-.798c0-.118-.085-.184-.213-.142l-.492.164a.754.754 0 01-.426 0l-.493-.164c-.117-.039-.13-.121-.024-.183l1.154-.692a.278.278 0 00.117-.326l-.164-.491c-.04-.118.014-.185.142-.142l.492.164a.287.287 0 00.326-.117l.692-1.153c.062-.104.141-.103.183.025l.165.492a.751.751 0 010 .425l-.165.492c-.039.117.026.213.143.213h.797c.118 0 .263.082.327.186l.692 1.155c.062.103.012.207-.1.23l-1.105.22a.358.358 0 00-.255.255l-.22 1.103c-.024.118-.125.164-.231.1L9.908 6.28z"
          fill="url(#pg_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgPg;
