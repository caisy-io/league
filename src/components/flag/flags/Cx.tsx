import * as React from "react";

function SvgCx(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cx_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cx_svg__b">
          <stop stopColor="#0637C5" offset="0%" />
          <stop stopColor="#002CAA" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cx_svg__c">
          <stop stopColor="#3BA758" offset="0%" />
          <stop stopColor="#2C8945" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cx_svg__d">
          <stop stopColor="#FFCC5D" offset="0%" />
          <stop stopColor="#FEC54A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cx_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#cx_svg__b)" d="M0 0h15v15H0z" />
        <path
          d="M3.5 10.884L3.108 11l.115-.397-.115-.396.392.116.392-.116-.115.396.115.397-.392-.116zm0-4.207l-.392.116.115-.396L3.108 6l.392.116L3.892 6l-.115.397.115.396-.392-.116zM4.608 8.36l-.392.116.115-.397-.115-.396.392.116L5 7.683l-.115.396.115.397-.392-.116zm-2.216.56L2 9.038l.115-.397L2 8.244l.392.116.392-.116-.115.396.115.397-.392-.116zm1.94.702l-.197.058.058-.198-.058-.199.196.058.196-.058-.057.199.057.198-.196-.058z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          d="M15 15L8.629 8.628s-1.338.121-1.87-.41c-.57-.57-.336-1.795-.336-1.795L0 0h15v15z"
          fill="url(#cx_svg__c)"
        />
        <path
          d="M9.683 7.554s1.376-.232 1.54-.884c.165-.652-1.31-1.118-1.368-1.353-.058-.235.542-.068.807 0 .257.066.76.402.76.402s-.006-.462-.075-.677C11.232 4.684 10.871 4 10.871 4s.612.4.875.717c.151.183.208 1.006.394 1.288.333.505 1.11-.059.78.476-.33.535-1.09.608-1.696.842-.55.212-1.776.497-1.776.497l.235-.266zM7.425 9A1.436 1.436 0 016 7.554c0-.799.638-1.447 1.425-1.447s1.425.648 1.425 1.447C8.85 8.352 8.212 9 7.425 9zm-.708-1.446l-.147.289s.479-.11.64 0c.22.148.215.578.215.578h.285s-.093-.422.053-.719c.147-.296.517-.438.517-.438v-.578s-.388.42-.855.578c-.467.158-.855 0-.855 0l.147.29z"
          fill="url(#cx_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCx;
