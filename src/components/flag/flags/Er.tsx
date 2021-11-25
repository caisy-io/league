import * as React from "react";

function SvgEr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="er_svg__a">
          <stop stopColor="#29C53F" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="er_svg__b">
          <stop stopColor="#579DED" offset="0%" />
          <stop stopColor="#458BDB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="er_svg__c">
          <stop stopColor="#F42D56" offset="0%" />
          <stop stopColor="#E9103D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#er_svg__a)" d="M0 0h15v8H0z" />
        <path fill="url(#er_svg__b)" d="M0 7.5h15V15H0z" />
        <path fill="url(#er_svg__c)" d="M0 15l15-7.5L0 0z" />
        <g transform="translate(2 5)" fill="#FFC63C">
          <path
            d="M2.5 4.286a1.786 1.786 0 100-3.572 1.786 1.786 0 000 3.572zM2.5 5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            fillRule="nonzero"
          />
          <circle cx={2.143} cy={1.786} r={1} />
          <circle cx={2.857} cy={2.143} r={1} />
          <circle cx={2.5} cy={1.429} r={1} />
          <circle cx={2.143} cy={2.5} r={1} />
          <circle cx={2.857} cy={2.857} r={1} />
          <circle cx={2.143} cy={3.214} r={1} />
          <circle cx={2.857} cy={3.571} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgEr;
