import * as React from "react";

function SvgHr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hr_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hr_svg__c">
          <stop stopColor="#FF202D" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hr_svg__e">
          <stop stopColor="#2027AC" offset="0%" />
          <stop stopColor="#191F94" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hr_svg__f">
          <stop stopColor="#FF212E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <path id="hr_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="hr_svg__d" fill="#fff">
          <use xlinkHref="#hr_svg__a" />
        </mask>
        <use fill="url(#hr_svg__b)" xlinkHref="#hr_svg__a" />
        <path fill="url(#hr_svg__c)" mask="url(#hr_svg__d)" d="M-3 0h21v5H-3z" />
        <path
          d="M5 4l.5-.5.5.5v1H5V4zm2 0l.5-.5.5.5v1H7V4zm2 0l.5-.5.5.5v1H9V4z"
          fill="#1895DB"
          fillRule="nonzero"
          opacity={0.5}
          mask="url(#hr_svg__d)"
        />
        <path
          d="M6 4l.5-.5.5.5v1H6V4zm2 0l.5-.5.5.5v1H8V4z"
          fill="#191F94"
          fillRule="nonzero"
          opacity={0.5}
          mask="url(#hr_svg__d)"
        />
        <path fill="url(#hr_svg__e)" mask="url(#hr_svg__d)" d="M-3 10h21v5H-3z" />
        <path
          d="M-3 10V5h21v5H-3zm12 0h1l-.273.547c-.126.25-.454.453-.727.453v-1zm-2 0h1v1H7v-1zm-2 0h1v1a.876.876 0 01-.727-.453L5 10z"
          fill="url(#hr_svg__b)"
          fillRule="nonzero"
          mask="url(#hr_svg__d)"
        />
        <path
          d="M7 5h1v1H7V5zm2 0h.5l.5 1H9V5zM5.5 5H6v1H5l.5-1zM6 6h1v1H6V6zm2 0h1v1H8V6zM7 7h1v1H7V7zm2 0h1v1H9V7zM8 8h1v1H8V8zM5 7h1v1H5V7zm1 1h1v1H6V8zM5 9h1v1H5V9zm2 0h1v1H7V9zm2 0h1v1H9V9zm-1 1h1v1H8v-1zm-2 0h1v1H6v-1z"
          fill="url(#hr_svg__f)"
          fillRule="nonzero"
          mask="url(#hr_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgHr;
