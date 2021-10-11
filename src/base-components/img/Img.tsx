import React, { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";
import { SImg } from "./styles/SImg";

interface IResponsiveImageResolution {
  bronze: number;
  silver?: number;
  gold?: number;
  platinum?: number;
  diamond?: number;
}

export interface IImg {
  src: string /** link to file */;
  children?: any;
  alt?: string;
  cover?: boolean;
  scrollContainer?: any;
  contain?: boolean;
  placeholderHeight?: string | number /** lazyload preloader height ==> default: 0 */;
  offset?: string /** offset lazyload trigger ==> default: 0 */;
  resolution:
    | number
    | IResponsiveImageResolution /** set the quality/resolution of the image in px/width ==> default: 50 */;
  lazyload?: boolean /** should the image be lazyloaded on scroll? ==> default: true */;
  onLoad?: () => void /** trigger when image is loaded ==> default: null */;
}

const ImgInner: React.FC<IImg> = ({ src, alt, resolution, children, onLoad, ...props }) => {
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current) {
      //@ts-ignore
      if (imgRef.current.complete) {
        setLoaded(true);
        onLoad && onLoad();
      } else {
        //@ts-ignore
        imgRef.current.onload = () => {
          setLoaded(true);
          onLoad && onLoad();
        };
      }
    }

    return () => {
      //@ts-ignore
      if (imgRef.current && imgRef.current.onload) {
        //@ts-ignore
        imgRef.current.onload = null;
      }
    };
  }, [src]);

  const _src = src.includes("?") ? src : src + `?w=${resolution}`;
  return (
    <SImg loaded={loaded} {...props}>
      <img src={_src} alt={alt} ref={imgRef as any} />
      {children}
    </SImg>
  );
};

export const Img = ({ lazyload = true, cover = true, ...props }: IImg) => {
  if (lazyload) {
    return (
      <LazyLoad
        scrollContainer={props.scrollContainer}
        height={props.placeholderHeight ? `${props.placeholderHeight}` : undefined}
        offset={props.offset}
      >
        <ImgInner {...props} cover={cover} />
      </LazyLoad>
    );
  }

  return <ImgInner {...props} cover={cover} />;
};
