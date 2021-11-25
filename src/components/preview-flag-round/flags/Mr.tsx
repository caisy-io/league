import * as React from "react";

function SvgMr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mr_svg__a">
          <stop stopColor="#108B4D" offset="0%" />
          <stop stopColor="#0A6135" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mr_svg__b">
          <stop stopColor="#FFC941" offset="0%" />
          <stop stopColor="#FFC42E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mr_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M11.945 6.3a4.5 4.5 0 11-8.89 0 4.501 4.501 0 008.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L7.585 4l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88v-.001z"
          fill="url(#mr_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgMr;
