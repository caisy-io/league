import * as React from "react";

function SvgSt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="st_svg__a">
          <stop stopColor="#2ACB41" offset="0%" />
          <stop stopColor="#21AC35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="st_svg__b">
          <stop stopColor="#FDD043" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="st_svg__c">
          <stop stopColor="#E71E43" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="st_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 10h15v5H0v-5zM0 0h15v5H0V0z" fill="url(#st_svg__a)" fillRule="nonzero" />
        <path fill="url(#st_svg__b)" d="M0 5h15v5H0z" />
        <path fill="url(#st_svg__c)" d="M0 0l6 7.5L0 15z" />
        <path
          d="M8.512 8.338L7.577 9l.315-1.132L7 7.146l1.129-.037L8.512 6l.384 1.109 1.129.037-.893.722L9.447 9l-.935-.662zm3.976 0L11.553 9l.315-1.132-.893-.722 1.13-.037L12.487 6l.383 1.109 1.13.037-.892.722L13.423 9l-.935-.662z"
          fill="url(#st_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgSt;
