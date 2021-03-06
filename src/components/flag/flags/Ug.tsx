import * as React from "react";

function SvgUg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ug_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ug_svg__b">
          <stop stopColor="#ED1623" offset="0%" />
          <stop stopColor="#D70915" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ug_svg__c">
          <stop stopColor="#FEE044" offset="0%" />
          <stop stopColor="#FCDB32" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ug_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v2H0V0zm0 8h15v2H0V8z" fill="url(#ug_svg__a)" fillRule="nonzero" />
        <path fill="url(#ug_svg__b)" d="M0 5h15v3H0z" />
        <path fill="url(#ug_svg__c)" d="M0 2h15v3H0z" />
        <path fill="url(#ug_svg__b)" d="M0 13h15v2H0z" />
        <path fill="url(#ug_svg__c)" d="M0 10h15v3H0z" />
        <circle fill="url(#ug_svg__d)" cx={7.5} cy={7.5} r={3.5} />
        <path
          d="M6.579 5.98a.253.253 0 010-.36l.14-.14c.1-.1.252-.27.338-.363l.122-.099c.122.017.317-.036.442-.012l.119.092a.427.427 0 01.043.433l-.268.536c-.07.152-.11.316-.116.482 0 .138.092.296.232.366l.536.268c.128.064.31.194.406.29l.652.652a.36.36 0 01.058.406l-.268.536c-.064.128-.194.154-.297.051L8.58 8.98a.253.253 0 00-.362 0l-.138.138a.71.71 0 00-.181.431.69.69 0 00.18.43l.14.14c.1.1.062.18-.068.18H7.147c-.137 0-.17-.078-.067-.18l.138-.14c.1-.1.18-.296.18-.43a.253.253 0 00-.25-.25.691.691 0 00-.43.18l-.14.14c-.1.1-.257.102-.36 0l-.14-.14a.253.253 0 010-.36l.14-.14c.1-.1.288-.18.433-.18h.496c.139 0 .17-.08.08-.172L6.07 7.471a.245.245 0 01.002-.346l.652-.652a.249.249 0 00-.007-.355L6.58 5.98h-.001z"
          fill="url(#ug_svg__a)"
        />
      </g>
    </svg>
  );
}

export default SvgUg;
