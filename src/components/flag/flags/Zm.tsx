import * as React from "react";

function SvgZm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="zm_svg__a">
          <stop stopColor="#2A8815" offset="0%" />
          <stop stopColor="#35A51D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zm_svg__b">
          <stop stopColor="#EF8A34" offset="0%" />
          <stop stopColor="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zm_svg__c">
          <stop stopColor="#F48D36" offset="0%" />
          <stop stopColor="#EC7E21" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zm_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zm_svg__e">
          <stop stopColor="#EC322B" offset="0%" />
          <stop stopColor="#DB261F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#zm_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M10.196 3.624s-.403.153-.834 0c-.342-.122-.687-.534-.97-.677-.164-.083.14-.478-.184-.371-.325.106-.855-.39-.855-.39s-.548-.667.259-.667 2.51.58 2.51.58.063-.3.202-.438.242-.265.47-.23c.227.034.353.355.353.355l-.354.135v.266s2.362-.724 2.92-.668c.558.056.109.669-.228 1.057-.13.15-.556.456-.815.21-.259-.245-.163.266-.43.43-.438.27-.602.516-.753.587-.15.072-.479 0-.479 0l.096.247s.027.296-.096.414-.208.202-.508.166c-.3-.035-.441.04-.541-.29-.1-.33.237-.716.237-.716zm.247-.342v.772l.339-.284-.34-.488h.001z"
          fill="url(#zm_svg__b)"
          fillRule="nonzero"
        />
        <path fill="url(#zm_svg__c)" d="M12 6h3v9h-3z" />
        <path fill="url(#zm_svg__d)" d="M9 6h3v9H9z" />
        <path fill="url(#zm_svg__e)" d="M6 6h3v9H6z" />
      </g>
    </svg>
  );
}

export default SvgZm;
