import * as React from "react";

function SvgJe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="je_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="je_svg__c">
          <stop stopColor="#EF273F" offset="0%" />
          <stop stopColor="#DB1C33" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="je_svg__e">
          <stop stopColor="#F22A41" offset="0%" />
          <stop stopColor="#E51D34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="je_svg__f">
          <stop stopColor="#FADF46" offset="0%" />
          <stop stopColor="#F9DC38" offset="100%" />
        </linearGradient>
        <path id="je_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="je_svg__d" fill="#fff">
          <use xlinkHref="#je_svg__a" />
        </mask>
        <use fill="url(#je_svg__b)" xlinkHref="#je_svg__a" />
        <path
          fill="url(#je_svg__c)"
          mask="url(#je_svg__d)"
          d="M7.5 6.291L-3.962-1.44-5.08.218l10.792 7.28-10.792 7.279 1.118 1.658L7.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L20.08.218 18.962-1.44z"
        />
        <path
          d="M6 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 01-.696 0l-.804-.804A1.354 1.354 0 016 3.493v-.991z"
          fill="url(#je_svg__e)"
          mask="url(#je_svg__d)"
        />
        <path
          d="M7.5 3.997a.5.5 0 110-1 .5.5 0 010 1zm0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5z"
          fill="url(#je_svg__f)"
          fillRule="nonzero"
          mask="url(#je_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgJe;
