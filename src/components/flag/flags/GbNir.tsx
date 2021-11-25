import * as React from "react";

function SvgGbNir(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-nir_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-nir_svg__c">
          <stop stopColor="#E82739" offset="0%" />
          <stop stopColor="#CA1A2B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-nir_svg__e">
          <stop stopColor="#E6101E" offset="0%" />
          <stop stopColor="#CA0814" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-nir_svg__f">
          <stop stopColor="#FFD148" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
        <path id="gb-nir_svg__a" d="M0 0h15v15H0z" />
        <path
          d="M0 1.75L1 2l.5-.5.5.5 1-.25-.404 1.009A.4.4 0 012.255 3H.745a.39.39 0 01-.341-.241L0 1.75zM1.5 1a.5.5 0 110-1 .5.5 0 010 1z"
          id="gb-nir_svg__g"
        />
        <path
          d="M0 1.75L1 2l.5-.5.5.5 1-.25-.404 1.009A.4.4 0 012.255 3H.745a.39.39 0 01-.341-.241L0 1.75zM1.5 1a.5.5 0 110-1 .5.5 0 010 1z"
          id="gb-nir_svg__i"
        />
        <path
          d="M0 1.75L1 2l.5-.5.5.5 1-.25-.404 1.009A.4.4 0 012.255 3H.745a.39.39 0 01-.341-.241L0 1.75zM1.5 1a.5.5 0 110-1 .5.5 0 010 1z"
          id="gb-nir_svg__k"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gb-nir_svg__d" fill="#fff">
          <use xlinkHref="#gb-nir_svg__a" />
        </mask>
        <use fill="url(#gb-nir_svg__b)" xlinkHref="#gb-nir_svg__a" />
        <path fill="url(#gb-nir_svg__c)" mask="url(#gb-nir_svg__d)" d="M6 6h-9v3h9v6h3V9h9V6H9V0H6z" />
        <path
          fill="url(#gb-nir_svg__b)"
          mask="url(#gb-nir_svg__d)"
          d="M8.516 9.26L7.5 11 6.484 9.26l-2.015-.01.998-1.75-.998-1.75 2.015-.01L7.5 4l1.016 1.74 2.015.01-.998 1.75.998 1.75z"
        />
        <path
          d="M6.55 7.006a.656.656 0 01.425-.664l.55-.184c.263-.087.475.063.475.35V7.5s.321-1.037.5-.5c.179.537-.128 1.526-.128 1.526a.671.671 0 01-.63.474h-.484a.577.577 0 01-.559-.506l-.148-1.488H6.55z"
          fill="url(#gb-nir_svg__e)"
          mask="url(#gb-nir_svg__d)"
        />
        <path
          d="M7.5 2.908c-.511 0-.967.304-1.168.763l-.1.229.457.201.1-.229a.775.775 0 011.418-.005l.102.228.456-.205-.102-.228a1.275 1.275 0 00-1.164-.754H7.5z"
          fill="url(#gb-nir_svg__b)"
          mask="url(#gb-nir_svg__d)"
        />
        <g mask="url(#gb-nir_svg__d)" fill="url(#gb-nir_svg__f)" fillRule="nonzero">
          <path d="M6 3.75L7 4l.5-.5.5.5 1-.25-.404 1.009A.4.4 0 018.255 5h-1.51a.39.39 0 01-.341-.241L6 3.75zM7.5 3a.5.5 0 110-1 .5.5 0 010 1z" />
        </g>
        <g mask="url(#gb-nir_svg__d)">
          <g transform="translate(6 2)">
            <mask id="gb-nir_svg__h" fill="#fff">
              <use xlinkHref="#gb-nir_svg__g" />
            </mask>
            <circle fill="#5169E2" mask="url(#gb-nir_svg__h)" cx={1.5} cy={2.5} r={1} />
          </g>
        </g>
        <g mask="url(#gb-nir_svg__d)">
          <g transform="translate(6 2)">
            <mask id="gb-nir_svg__j" fill="#fff">
              <use xlinkHref="#gb-nir_svg__i" />
            </mask>
            <circle fill="#D34D43" mask="url(#gb-nir_svg__j)" cx={2.5} cy={2.5} r={1} />
          </g>
        </g>
        <g mask="url(#gb-nir_svg__d)">
          <g transform="translate(6 2)">
            <mask id="gb-nir_svg__l" fill="#fff">
              <use xlinkHref="#gb-nir_svg__k" />
            </mask>
            <circle fill="#D34D43" mask="url(#gb-nir_svg__l)" cx={0.5} cy={2.5} r={1} />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgGbNir;
