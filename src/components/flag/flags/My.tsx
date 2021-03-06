import * as React from "react";

function SvgMy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="my_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="my_svg__c">
          <stop stopColor="#E1244A" offset="0%" />
          <stop stopColor="#BE1134" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="my_svg__e">
          <stop stopColor="#0C3F8E" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="my_svg__f">
          <stop stopColor="#FFD34F" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
        <path id="my_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="my_svg__d" fill="#fff">
          <use xlinkHref="#my_svg__a" />
        </mask>
        <use fill="url(#my_svg__b)" xlinkHref="#my_svg__a" />
        <path
          d="M10 0h11v1H10V0zm0 2h11v1H10V2zm0 2h11v1H10V4zm0 2h11v1H10V6zM0 8h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
          fill="url(#my_svg__c)"
          fillRule="nonzero"
          mask="url(#my_svg__d)"
        />
        <path fill="url(#my_svg__e)" mask="url(#my_svg__d)" d="M0 0h12v8H0z" />
        <path
          d="M6.874 1.657a2.5 2.5 0 100 4.686 3 3 0 110-4.686zM8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29L8 4.82z"
          fill="url(#my_svg__f)"
          fillRule="nonzero"
          mask="url(#my_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgMy;
