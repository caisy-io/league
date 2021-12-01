import * as React from "react";

function SvgDm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dm_svg__c">
          <stop stopColor="#108753" offset="0%" />
          <stop stopColor="#0B6B41" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dm_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dm_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dm_svg__f">
          <stop stopColor="#FCD449" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dm_svg__g">
          <stop stopColor="#E02C42" offset="0%" />
          <stop stopColor="#D22036" offset="100%" />
        </linearGradient>
        <path id="dm_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="dm_svg__b" fill="#fff">
          <use xlinkHref="#dm_svg__a" />
        </mask>
        <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#dm_svg__a" />
        <g mask="url(#dm_svg__b)">
          <g transform="translate(-3)">
            <path d="M0 0h21v6H0V0zm0 9h21v6H0V9z" fill="url(#dm_svg__c)" fillRule="nonzero" />
            <path fill="url(#dm_svg__d)" d="M9 6H0v3h9v6h3V9h9V6h-9V0H9z" />
            <path fill="url(#dm_svg__e)" d="M10 8v7h1V8h10V7H11V0h-1v7H0v1z" />
            <path fill="url(#dm_svg__f)" d="M9 7v8h1V7h11V6H10V0H9v6H0v1z" />
            <circle fill="url(#dm_svg__g)" cx={10.5} cy={7.5} r={3.5} />
            <path
              d="M10.5 10.5a.5.5 0 110-1c.274 0 .538-.055.784-.16a.5.5 0 11.392.92 2.98 2.98 0 01-1.176.24zm2.816-1.965a3 3 0 00.177-1.242.5.5 0 00-.998.068c.02.282-.02.565-.117.83a.5.5 0 10.938.344zm-.95-3.383a2.992 2.992 0 00-1.07-.545.5.5 0 00-.264.964c.26.072.502.195.712.363a.5.5 0 10.623-.782h-.001zm-3.422-.217c-.345.21-.645.487-.88.814a.5.5 0 10.811.584c.158-.218.358-.404.588-.544a.5.5 0 00-.52-.854h.001zM7.564 8.12c.084.397.247.771.479 1.101a.5.5 0 00.818-.574 1.987 1.987 0 01-.318-.733.5.5 0 10-.979.206zm2.54 2.354a.5.5 0 11.132-.991c.08.01.163.016.245.017a.5.5 0 11-.009 1 3.021 3.021 0 01-.367-.026h-.001z"
              fill="#0E673F"
              fillRule="nonzero"
            />
            <path d="M10.5 8.5c.552 0 .5-.448.5-1s.052-1-.5-1-.5.448-.5 1-.052 1 .5 1z" fill="#0E673F" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgDm;
