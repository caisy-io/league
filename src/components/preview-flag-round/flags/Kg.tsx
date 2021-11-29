import * as React from "react";

function SvgKg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kg_svg__a">
          <stop stopColor="#F22A46" offset="0%" />
          <stop stopColor="#E71834" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kg_svg__b">
          <stop stopColor="#FFF04D" offset="0%" />
          <stop stopColor="#FFEE35" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#kg_svg__a)" d="M0 0h15v15H0z" />
        <circle fill="url(#kg_svg__b)" cx={7.5} cy={7.5} r={2.5} />
        <path
          d="M7.5 11.035l-1.224 1.827-.31-2.177L4.071 11.8l.665-2.096-2.191.182 1.508-1.6L2 7.5l2.053-.787-1.508-1.6 2.191.183L4.071 3.2l1.895 1.115.31-2.177L7.5 3.965l1.224-1.827.31 2.177L10.929 3.2l-.665 2.096 2.191-.182-1.508 1.6L13 7.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177L7.5 11.035zm0-.035a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
          fill="url(#kg_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgKg;
