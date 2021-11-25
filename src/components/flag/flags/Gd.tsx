import * as React from "react";

function SvgGd(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gd_svg__a">
          <stop stopColor="#E42235" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gd_svg__b">
          <stop stopColor="#079B77" offset="0%" />
          <stop stopColor="#007B5D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gd_svg__d">
          <stop stopColor="#FFD93B" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gd_svg__f">
          <stop stopColor="#E21C30" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gd_svg__g">
          <stop stopColor="#FFD938" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <path id="gd_svg__c" d="M0 0h13v13H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gd_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h13v13H0z" fill="url(#gd_svg__b)" transform="translate(1 1)" />
        <g transform="translate(1 1)">
          <mask id="gd_svg__e" fill="#fff">
            <use xlinkHref="#gd_svg__c" />
          </mask>
          <path
            d="M0 0h13L6.5 6.5 0 0zm0 13l6.5-6.5L13 13H0z"
            fill="url(#gd_svg__d)"
            fillRule="nonzero"
            mask="url(#gd_svg__e)"
          />
        </g>
        <g transform="translate(5 5)">
          <circle fill="url(#gd_svg__f)" cx={2.5} cy={2.5} r={2.5} />
          <path
            fill="url(#gd_svg__g)"
            d="M2.5 3.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L2.5.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
          />
        </g>
        <path
          d="M1.16 6.802c.283.453.69.752 1.068.829.21.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411C2.417 5.039 2.4 5.503 1.213 5c.124.72-.492 1.1-.053 1.802z"
          fill="url(#gd_svg__g)"
          transform="translate(1 1)"
        />
      </g>
    </svg>
  );
}

export default SvgGd;
