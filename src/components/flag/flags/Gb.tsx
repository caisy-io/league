import * as React from "react";

function SvgGb(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb_svg__c">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb_svg__e">
          <stop stopColor="#E6273E" offset="0%" />
          <stop stopColor="#CF152B" offset="100%" />
        </linearGradient>
        <path id="gb_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gb_svg__d" fill="#fff">
          <use xlinkHref="#gb_svg__a" />
        </mask>
        <use fill="url(#gb_svg__b)" xlinkHref="#gb_svg__a" />
        <path fill="url(#gb_svg__c)" mask="url(#gb_svg__d)" d="M-3 0h21v15H-3z" />
        <path
          fill="url(#gb_svg__b)"
          mask="url(#gb_svg__d)"
          d="M2.085 9.437H-2.92v-5h5.005L-5-.343-3.882-2 5.08 4.045v-5.608h5v5.608L19.042-2 20.16-.343l-7.085 4.78h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045v5.608h-5V9.829l-8.962 6.045L-5 14.216z"
        />
        <path
          d="M11.278 4.702l9.5-6.25a.25.25 0 00-.275-.417l-9.5 6.25a.25.25 0 10.275.417zm.732 5.522l8.515 5.74a.25.25 0 10.28-.415l-8.516-5.74a.25.25 0 10-.28.415zM3.284 4.27l-8.882-5.987a.25.25 0 10-.28.415l8.883 5.986a.25.25 0 00.279-.414zm.685 5.47l-9.845 6.53a.25.25 0 10.276.415l9.846-6.529a.25.25 0 00-.277-.417z"
          fill="#DB1F35"
          fillRule="nonzero"
          mask="url(#gb_svg__d)"
        />
        <path fill="url(#gb_svg__e)" mask="url(#gb_svg__d)" d="M-3 9h9v6h3V9h9V6H9V0H6v6h-9z" />
      </g>
    </svg>
  );
}

export default SvgGb;
