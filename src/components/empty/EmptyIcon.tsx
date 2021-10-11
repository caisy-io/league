import React from "react";

function EmptyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="80">
      <defs>
        <linearGradient id="a" x1="52.348%" x2="52.348%" y1="74.611%" y2="-17.635%">
          <stop offset="0%" stopColor="#DEDEDE" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#A9A9A9" stopOpacity="0.3"></stop>
        </linearGradient>
        <linearGradient id="b" x1="44.79%" x2="44.79%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#96A1C5" stopOpacity="0.373"></stop>
        </linearGradient>
        <linearGradient id="c" x1="50%" x2="50%" y1="100%" y2="-19.675%">
          <stop offset="0%" stopColor="#FFF" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#919191" stopOpacity="0.15"></stop>
        </linearGradient>
        <linearGradient id="d" x1="50%" x2="50%" y1="0%" y2="44.95%">
          <stop offset="0%" stopColor="#5389F5"></stop>
          <stop offset="100%" stopColor="#416FDC"></stop>
        </linearGradient>
        <linearGradient id="e" x1="63.345%" x2="63.345%" y1="100%" y2="-5.316%">
          <stop offset="0%" stopColor="#DCE9FF"></stop>
          <stop offset="100%" stopColor="#B6CFFF"></stop>
        </linearGradient>
        <linearGradient id="f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#7CA5F7"></stop>
          <stop offset="100%" stopColor="#C4D6FC"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(-1.866 .364)">
        <path
          fill="url(#a)"
          d="M27.94 14.864c1.326-4.192 2.56-6.802 3.7-7.831 3.157-2.848 7.522-1.298 8.45-1.076 3.26.782 2.2-4.364 4.997-5.41 1.864-.697 3.397.155 4.6 2.556C50.752.863 52.375-.163 54.556.02c3.272.277 4.417 11.328 8.913 8.909 4.497-2.42 10.01-2.973 12.365.623.509.778.704-.429 4.166-4.55C83.462.88 86.914-.936 93.996 1.464c3.22 1.09 5.868 4.045 7.947 8.864 0 6.878 5.06 10.95 15.178 12.213 15.179 1.895 3.397 18.214-15.178 22.993-18.576 4.78-61.343 7.36-84.551-4.716C1.92 32.769 5.436 24.117 27.939 14.864z"
          opacity="0.8"
        ></path>
        <ellipse cx="66" cy="69.166" fill="url(#b)" rx="27.987" ry="6.478"></ellipse>
        <path
          fill="url(#c)"
          d="M113.25 77.249c-21.043 5.278-92.87-.759-100.515-3.516-3.721-1.343-7.075-3.868-10.061-7.576a2.822 2.822 0 012.198-4.593h125.514c2.605 6.938-3.107 12.166-17.136 15.685z"
          opacity="0.675"
        ></path>
        <g fillRule="nonzero">
          <path
            fill="url(#d)"
            d="M43.396 12.098L33.825.906a2.434 2.434 0 00-1.837-.86h-20.58c-.706 0-1.377.324-1.837.86L0 12.098v6.144h43.396v-6.144z"
            transform="translate(44.08 39.707)"
          ></path>
          <path
            fill="url(#e)"
            d="M40.684 18.468L32.307 8.72a2.136 2.136 0 00-1.622-.725H12.711c-.617 0-1.22.256-1.622.725l-8.377 9.748v5.354h37.972v-5.354z"
            transform="translate(44.08 39.707)"
          ></path>
          <path
            fill="url(#f)"
            d="M43.396 25.283c0 .853-.384 1.62-.99 2.134l-.123.1a2.758 2.758 0 01-1.67.56H2.784c-.342 0-.669-.062-.971-.176l-.15-.06A2.802 2.802 0 010 25.282V12.165h10.529c1.163 0 2.1.957 2.1 2.118v.015c0 1.162.948 2.099 2.111 2.099h13.916a2.113 2.113 0 002.111-2.107c0-1.166.938-2.125 2.1-2.125h10.53z"
            transform="translate(44.08 39.707)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default EmptyIcon;
