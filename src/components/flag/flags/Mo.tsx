import * as React from "react";

function SvgMo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mo_svg__a">
          <stop stopColor="#079D7B" offset="0%" />
          <stop stopColor="#01795E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mo_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mo_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M5.452 8.902c.143.038.284.07.423.098H3.5c.119.356.278.691.473 1h7.054a4.61 4.61 0 00.473-1H9.093c.143-.027.289-.059.437-.097C9.076 8.918 8.336 9 7.5 9c-.847 0-1.596-.084-2.048-.098zm-.417-.125c-1.12-.379-1.889-.985-1.768-1.437.134-.503 1.325-.62 2.659-.263.07.018.139.038.206.059a4.342 4.342 0 01-.046-.637C6.086 5.12 6.72 4 7.5 4c.78 0 1.414 1.12 1.414 2.5 0 .219-.016.431-.046.634.077-.024.155-.047.234-.068 1.334-.357 2.524-.24 2.659.264.122.454-.66 1.067-1.797 1.445C9.764 8.18 8.737 8 7.5 8c-1.238 0-2.266.18-2.465.777zM10.166 11c-.728.625-1.656 1-2.666 1a4.076 4.076 0 01-2.666-1h5.332z"
          fill="url(#mo_svg__b)"
          fillRule="nonzero"
        />
        <path
          d="M7.5 3a.5.5 0 110-1 .5.5 0 010 1zm-4 2.5a.5.5 0 110-1 .5.5 0 010 1zm8 0a.5.5 0 110-1 .5.5 0 010 1zM10 4a.5.5 0 110-1 .5.5 0 010 1zM5 4a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#FCD117"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgMo;
