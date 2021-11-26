import * as React from "react";

function SvgEs(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="es_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="es_svg__b">
          <stop stopColor="#DD172C" offset="0%" />
          <stop stopColor="#C60B1F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="es_svg__c">
          <stop stopColor="#FFD133" offset="0%" />
          <stop stopColor="#FFC500" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#es_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v4H0V0zm0 11h15v4H0v-4z" fill="url(#es_svg__b)" fillRule="nonzero" />
        <path fill="url(#es_svg__c)" d="M0 4h15v7H0z" />
        <path fill="#FFEDB1" d="M3.929 7h.714v.5h-.714z" />
        <path
          d="M4.915 8.46c.025.295.291.54.585.54s.56-.246.585-.54L6.207 7H4.793l.122 1.46zm-.624-1.465a.456.456 0 01.465-.495h1.488a.45.45 0 01.465.495l-.126 1.506c-.053.56-.52.99-1.083.999a1.104 1.104 0 01-1.083-.999L4.29 6.995h.001z"
          fill="#A41517"
          fillRule="nonzero"
        />
        <path
          d="M4.5 7.5h2V8H6l-.5 1L5 8h-.5v-.5zM3 6h1v3.5H3V6zm4 0h1v3.5H7V6zm-2.5-.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248A.248.248 0 016.255 6h-1.51a.245.245 0 01-.245-.252V5.5z"
          fill="#A41517"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgEs;
