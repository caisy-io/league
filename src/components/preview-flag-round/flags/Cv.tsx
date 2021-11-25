import * as React from "react";

function SvgCv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cv_svg__a">
          <stop stopColor="#0C49AE" offset="0%" />
          <stop stopColor="#063B91" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cv_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cv_svg__c">
          <stop stopColor="#CD232E" offset="0%" />
          <stop stopColor="#CD232E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v8H0V0zm0 11h15v4H0v-4z" fill="url(#cv_svg__a)" fillRule="nonzero" />
        <path fill="url(#cv_svg__b)" d="M0 8h15v3H0z" />
        <path fill="url(#cv_svg__c)" d="M0 9h15v1H0z" />
        <path
          d="M5.48 12.929a.5.5 0 110-1c.284 0 .56-.047.822-.138a.5.5 0 01.33.944 3.5 3.5 0 01-1.152.194zm2.651-1.215a3.5 3.5 0 00.605-.998.5.5 0 10-.93-.368 2.5 2.5 0 01-.432.713.5.5 0 00.757.653zm.817-2.76A3.48 3.48 0 008.6 7.842a.5.5 0 00-.89.454c.125.248.21.516.247.794a.5.5 0 10.991-.134zm-1.61-2.492a3.482 3.482 0 00-1.08-.446.5.5 0 10-.22.975c.272.062.531.17.768.318a.5.5 0 10.53-.847h.001zm-2.8-.405a3.487 3.487 0 00-1.056.498.5.5 0 10.571.82c.23-.16.484-.28.753-.354a.5.5 0 00-.268-.964zM2.33 7.902a3.48 3.48 0 00-.327 1.12.5.5 0 10.994.116 2.48 2.48 0 01.232-.8.5.5 0 10-.9-.436h.001zm-.06 2.925c.157.359.373.689.638.976a.5.5 0 10.735-.678 2.503 2.503 0 01-.456-.698.5.5 0 00-.917.4zm2.146 1.937a.5.5 0 11.304-.953c.23.073.47.113.714.118a.5.5 0 01-.018 1 3.495 3.495 0 01-1-.165z"
          fill="#F7D035"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCv;
