import * as React from "react";

function SvgBb(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bb_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bb_svg__b">
          <stop stopColor="#1132C7" offset="0%" />
          <stop stopColor="#0522A5" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bb_svg__c">
          <stop stopColor="#08379D" offset="0%" />
          <stop stopColor="#042A7D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bb_svg__d">
          <stop stopColor="#FFCC50" offset="0%" />
          <stop stopColor="#FFC63C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bb_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bb_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#bb_svg__b)" d="M0 0h15v15H0z" />
        <path d="M7.143 0H15v15H7.143V0zM0 0h5v15H0V0z" fill="url(#bb_svg__c)" fillRule="nonzero" />
        <path fill="url(#bb_svg__d)" d="M5 0h5v15H5z" />
        <path
          d="M7.425 6.058c.048-.08.125-.075.17 0l.432.736c.045.08.011.143-.073.143h-.147a.128.128 0 00-.106.048.162.162 0 00-.035.121L7.79 8.47c.01.095.082.167.168.17a.403.403 0 00.262-.122l.086-.094a.493.493 0 00.11-.294v-.34a.504.504 0 00-.11-.296L8.219 7.4c-.06-.068-.05-.146.033-.177l.63-.233c.08-.03.131.02.115.115L8.772 8.47a.65.65 0 01-.138.288L8.22 9.2a.42.42 0 01-.263.118c-.04 0-.08.018-.109.05a.179.179 0 00-.044.122v.337a.18.18 0 01-.044.123.144.144 0 01-.11.049h-.302a.144.144 0 01-.11-.05.18.18 0 01-.044-.122V9.49c0-.094-.069-.17-.153-.172a.4.4 0 01-.259-.118l-.398-.444a.678.678 0 01-.136-.288l-.244-1.363c-.018-.094.029-.147.112-.116l.63.234c.08.03.095.106.032.176l-.084.094a.501.501 0 00-.11.296v.34a.5.5 0 00.11.293l.085.094c.06.068.18.121.262.121.087 0 .159-.073.168-.169l.122-1.363a.165.165 0 00-.035-.12.131.131 0 00-.105-.05h-.147c-.086 0-.114-.066-.069-.142l.45-.736z"
          fill="url(#bb_svg__e)"
        />
      </g>
    </svg>
  );
}

export default SvgBb;
