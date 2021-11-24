import * as React from "react";

function SvgAo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ao_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ao_svg__b">
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ao_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ao_svg__d">
          <stop stopColor="#DD2137" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ao_svg__e">
          <stop stopColor="#F8D84B" offset="0%" />
          <stop stopColor="#F9D536" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ao_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ao_svg__b)" d="M0 0h15v15H0z" />
        <path fill="url(#ao_svg__c)" d="M0 7.5h15V15H0z" />
        <path fill="url(#ao_svg__d)" d="M0 0h15v7.5H0z" />
        <path
          d="M7.235 8.853l-1.407-.939a.5.5 0 01.554-.832l1.536 1.024a2 2 0 00-1.253-2.863.5.5 0 11.259-.966 3 3 0 011.83 4.386l.628.42a.5.5 0 01-.554.831l-.713-.475a2.995 2.995 0 01-2.744.633.5.5 0 11.259-.966c.57.153 1.147.044 1.606-.253h-.001zm-1.13-2.355a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#ao_svg__e)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgAo;
