import * as React from "react";

function SvgGu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__a">
          <stop stopColor="#DE3149" offset="0%" />
          <stop stopColor="#C2273D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__b">
          <stop stopColor="#053B94" offset="0%" />
          <stop stopColor="#002E7A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__e">
          <stop stopColor="#81C1F3" offset="0%" />
          <stop stopColor="#6AB1E9" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__h">
          <stop stopColor="#27A07E" offset="0%" />
          <stop stopColor="#1F9171" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__k">
          <stop stopColor="#1E8CE8" offset="0%" />
          <stop stopColor="#107FDC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__n">
          <stop stopColor="#FFF048" offset="0%" />
          <stop stopColor="#FFEF36" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gu_svg__p">
          <stop stopColor="#8F5715" offset="0%" />
          <stop stopColor="#7A480D" offset="100%" />
        </linearGradient>
        <path d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z" id="gu_svg__d" />
        <path d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z" id="gu_svg__g" />
        <path d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z" id="gu_svg__j" />
        <path d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z" id="gu_svg__m" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gu_svg__a)" d="M0 0h15v15H0z" />
        <rect fill="url(#gu_svg__b)" x={1} y={1} width={13} height={13} rx={0.75} />
        <path
          d="M3.5 9s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z"
          fill="url(#gu_svg__a)"
          transform="translate(4 3)"
        />
        <path
          d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z"
          fill="url(#gu_svg__c)"
          transform="translate(5 3)"
        />
        <g transform="translate(5 3)">
          <mask id="gu_svg__f" fill="#fff">
            <use xlinkHref="#gu_svg__d" />
          </mask>
          <path fill="url(#gu_svg__e)" mask="url(#gu_svg__f)" d="M0 0h5v5H0z" />
        </g>
        <g transform="translate(5 3)">
          <mask id="gu_svg__i" fill="#fff">
            <use xlinkHref="#gu_svg__g" />
          </mask>
          <path
            fill="url(#gu_svg__h)"
            mask="url(#gu_svg__i)"
            d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"
          />
        </g>
        <g transform="translate(5 3)">
          <mask id="gu_svg__l" fill="#fff">
            <use xlinkHref="#gu_svg__j" />
          </mask>
          <path fill="url(#gu_svg__k)" mask="url(#gu_svg__l)" d="M0 5h5v4H0z" />
        </g>
        <g transform="translate(5 3)">
          <mask id="gu_svg__o" fill="#fff">
            <use xlinkHref="#gu_svg__m" />
          </mask>
          <path
            d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z"
            fill="url(#gu_svg__n)"
            mask="url(#gu_svg__o)"
          />
        </g>
        <path
          d="M3.251 3.475c-.035.36-.058.722-.067 1.084-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 10.246-.436 3.148 3.148 0 01-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85.009-.35.03-.698.065-1.046a.25.25 0 10-.498-.05z"
          fill="url(#gu_svg__p)"
          transform="translate(4 3)"
        />
        <path fill="#FFF" d="M6 7.5L7 9H6z" />
      </g>
    </svg>
  );
}

export default SvgGu;
