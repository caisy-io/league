import * as React from "react";

function SvgTm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <ellipse id="tm_svg__c" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__e" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__g" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__i" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__k" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__m" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="tm_svg__o" cx={1.5} cy={1} rx={1.5} ry={1} />
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tm_svg__a">
          <stop stopColor="#30C375" offset="0%" />
          <stop stopColor="#28AE67" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tm_svg__b">
          <stop stopColor="#DE414F" offset="0%" />
          <stop stopColor="#CA3745" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tm_svg__q">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tm_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#tm_svg__b)" d="M3 0h3v15H3z" />
        <ellipse cx={1.5} cy={1} rx={1.5} ry={1} fill="#FFF" transform="translate(3 1)" />
        <g transform="translate(3 1)">
          <mask id="tm_svg__d" fill="#fff">
            <use xlinkHref="#tm_svg__c" />
          </mask>
          <circle fill="#DD404F" mask="url(#tm_svg__d)" cx={1.5} cy={1} r={1} />
        </g>
        <g transform="translate(3 1)">
          <mask id="tm_svg__f" fill="#fff">
            <use xlinkHref="#tm_svg__e" />
          </mask>
          <path d="M0 0h1.5v1H0V0zm1.5 1H3v1H1.5V1z" fill="#FBAF29" fillRule="nonzero" mask="url(#tm_svg__f)" />
        </g>
        <ellipse cx={1.5} cy={1} rx={1.5} ry={1} fill="#FFF" transform="translate(3 12)" />
        <g transform="translate(3 12)">
          <mask id="tm_svg__h" fill="#fff">
            <use xlinkHref="#tm_svg__g" />
          </mask>
          <circle fill="#DD404F" mask="url(#tm_svg__h)" cx={1.5} cy={1} r={1} />
        </g>
        <g transform="translate(3 12)">
          <mask id="tm_svg__j" fill="#fff">
            <use xlinkHref="#tm_svg__i" />
          </mask>
          <path d="M0 0h1.5v1H0V0zm1.5 1H3v1H1.5V1z" fill="#FBAF29" fillRule="nonzero" mask="url(#tm_svg__j)" />
        </g>
        <g transform="translate(3 7)">
          <ellipse cx={1.5} cy={1} rx={1.5} ry={1} fill="#28AE67" />
          <mask id="tm_svg__l" fill="#fff">
            <use xlinkHref="#tm_svg__k" />
          </mask>
          <circle fill="#DD404F" mask="url(#tm_svg__l)" cx={1.5} cy={1} r={1} />
        </g>
        <ellipse cx={1.5} cy={1.5} rx={1.5} ry={1} transform="translate(3 9)" fill="#28AE67" />
        <g transform="translate(3 4)">
          <ellipse cx={1.5} cy={1} rx={1.5} ry={1} fill="#FBAF29" />
          <mask id="tm_svg__n" fill="#fff">
            <use xlinkHref="#tm_svg__m" />
          </mask>
          <circle fill="#DD404F" mask="url(#tm_svg__n)" cx={1.5} cy={1} r={1} />
          <mask id="tm_svg__p" fill="#fff">
            <use xlinkHref="#tm_svg__o" />
          </mask>
          <path d="M0 0h1v2H0V0zm2 0h1v2H2V0z" fill="#28AE67" fillRule="nonzero" mask="url(#tm_svg__p)" />
        </g>
        <g transform="translate(8 2)" fill="url(#tm_svg__q)">
          <path
            d="M2.94 1.556a.357.357 0 10.533.477.357.357 0 00-.532-.477zm-.925 1.385a.357.357 0 10-.477.532.357.357 0 00.477-.532zm-.714-.715a.357.357 0 10-.477.532.357.357 0 00.477-.532zM2.729.798a.357.357 0 10-.476.532.357.357 0 00.476-.532zm-.357 1.071a.357.357 0 10-.476.532.357.357 0 00.476-.532z"
            fillRule="nonzero"
          />
          <path d="M4.362 4.349a2.179 2.179 0 01-3.304-.262A2.179 2.179 0 004.1 1.044a2.179 2.179 0 01.261 3.305z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgTm;
