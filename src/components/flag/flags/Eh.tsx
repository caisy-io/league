import * as React from "react";

function SvgEh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eh_svg__a">
          <stop stopColor="#199E56" offset="0%" />
          <stop stopColor="#0F7A40" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eh_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eh_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eh_svg__d">
          <stop stopColor="#E6223A" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#eh_svg__a)" d="M0 10h15v5H0z" />
        <path fill="url(#eh_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#eh_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M10.786 8.97c-.3.245-.674.38-1.06.38C8.772 9.35 8 8.544 8 7.55s.772-1.8 1.726-1.8c.4 0 .767.142 1.06.38a1.666 1.666 0 00-.418-.053c-.866 0-1.568.66-1.568 1.473 0 .813.702 1.472 1.568 1.472.145 0 .285-.018.418-.052zm.014-.893l-.717.52.265-.855-.708-.534.88-.008.28-.85.28.85.88.008-.707.534.265.855-.718-.52z"
          fill="url(#eh_svg__d)"
          fillRule="nonzero"
        />
        <path fill="url(#eh_svg__d)" d="M0 0l7 7.5L0 15z" />
      </g>
    </svg>
  );
}

export default SvgEh;
