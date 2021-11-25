import * as React from "react";

function SvgBz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bz_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bz_svg__b">
          <stop stopColor="#094995" offset="0%" />
          <stop stopColor="#074185" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bz_svg__c">
          <stop stopColor="#D5182F" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bz_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#bz_svg__b)" d="M0 2h15v11H0z" />
        <path d="M0 0h15v2H0V0zm0 13h15v2H0v-2z" fill="url(#bz_svg__c)" fillRule="nonzero" />
        <g transform="translate(3 3)">
          <circle fill="url(#bz_svg__a)" cx={4.5} cy={4.5} r={4.5} />
          <path
            d="M4.5 8a.5.5 0 010-1c.284 0 .56-.047.822-.138a.5.5 0 11.329.944A3.5 3.5 0 014.5 8zm2.651-1.215a3.5 3.5 0 00.605-.998.5.5 0 00-.93-.368 2.5 2.5 0 01-.432.713.5.5 0 00.757.653zm.817-2.759a3.48 3.48 0 00-.348-1.114.5.5 0 00-.891.454c.126.248.21.516.248.794a.5.5 0 00.991-.134zM6.357 1.533a3.482 3.482 0 00-1.08-.446.5.5 0 00-.22.975c.273.062.532.17.769.318a.5.5 0 10.53-.847h.001zm-2.8-.405a3.487 3.487 0 00-1.055.498.5.5 0 10.571.82c.23-.159.484-.28.753-.354a.5.5 0 10-.268-.964h-.001zM1.35 2.973a3.48 3.48 0 00-.327 1.121.5.5 0 10.994.115 2.48 2.48 0 01.232-.8.5.5 0 10-.9-.436h.001zm-.06 2.925c.157.359.373.689.638.976a.5.5 0 10.735-.678 2.503 2.503 0 01-.456-.698.5.5 0 10-.917.4zm2.146 1.937a.5.5 0 11.304-.953c.229.073.469.113.714.118a.5.5 0 01-.018 1 3.495 3.495 0 01-1-.165z"
            fill="#118014"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgBz;
