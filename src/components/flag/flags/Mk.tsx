import * as React from "react";

function SvgMk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mk_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mk_svg__c">
          <stop stopColor="#E81B26" offset="0%" />
          <stop stopColor="#D00914" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mk_svg__e">
          <stop stopColor="#FFE94F" offset="0%" />
          <stop stopColor="#FFE633" offset="100%" />
        </linearGradient>
        <path id="mk_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="mk_svg__d" fill="#fff">
          <use xlinkHref="#mk_svg__a" />
        </mask>
        <use fill="url(#mk_svg__b)" xlinkHref="#mk_svg__a" />
        <path fill="url(#mk_svg__c)" mask="url(#mk_svg__d)" d="M-3.004-.002h21v15h-21z" />
        <circle fill="url(#mk_svg__e)" mask="url(#mk_svg__d)" cx={7.496} cy={7.498} r={2.5} />
        <path
          d="M10.961 7.993l7.035 1.005v-3l-7.035 1.005a3.53 3.53 0 010 .99zm-6.93-.99l-7.035-1.005v3l7.035-1.005a3.53 3.53 0 010-.99zm4.152-2.938l.813-4.067h-3l.814 4.067c.453-.09.92-.09 1.373 0zM6.81 10.931l-.814 4.067h3l-.813-4.067c-.453.09-.92.09-1.373 0zM4.652 9.539l-8.192 5.878 2.007 2.229 6.703-7.533a3.52 3.52 0 01-.518-.574zm5.688-4.082L18.532-.42l-2.007-2.23-6.702 7.533c.192.172.366.364.517.574zm-.517 4.656l6.702 7.533 2.007-2.23L10.34 9.54a3.52 3.52 0 01-.517.574v-.001zM5.17 4.883L-1.533-2.65-3.54-.42l8.192 5.877a3.52 3.52 0 01.518-.574z"
          fill="url(#mk_svg__e)"
          fillRule="nonzero"
          mask="url(#mk_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgMk;
