import * as React from "react";

function SvgPh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ph_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ph_svg__b">
          <stop stopColor="#DD1C34" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ph_svg__c">
          <stop stopColor="#0D4BC3" offset="0%" />
          <stop stopColor="#073DA6" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ph_svg__d">
          <stop stopColor="#FDD64D" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ph_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ph_svg__b)" d="M0 7h15v8H0z" />
        <path fill="url(#ph_svg__c)" d="M0 0h15v7.5H0z" />
        <path fill="url(#ph_svg__a)" d="M0 0l7 7.5L0 15z" />
        <path
          d="M2.371 8.043l-.49.717.186-.837a.569.569 0 01-.082-.078l-.877.177.752-.467a.527.527 0 010-.11l-.751-.467.877.177a.569.569 0 01.081-.078l-.185-.837.49.717a.606.606 0 01.115 0l.489-.717-.186.837c.03.024.057.05.082.078l.877-.177-.751.467a.527.527 0 010 .11l.751.467-.877-.177a.569.569 0 01-.082.078l.186.837-.49-.717a.606.606 0 01-.116 0h.001zm2.343-.27A.28.28 0 014.43 7.5a.28.28 0 01.285-.273A.28.28 0 015 7.5a.28.28 0 01-.286.273zM1.286 5.045A.28.28 0 011 4.773a.28.28 0 01.286-.273.28.28 0 01.285.273.28.28 0 01-.285.272zm0 5.455A.28.28 0 011 10.227a.28.28 0 01.286-.272.28.28 0 01.285.272.28.28 0 01-.285.273z"
          fill="url(#ph_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgPh;
