import React, { CSSProperties, memo, useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";
import { SImg } from "./styles/SImg";

export interface IResponsiveImageResolution {
  bronze: number;
  silver?: number;
  gold?: number;
  platinum?: number;
  diamond?: number;
}

export interface IImg {
  src: string /** link to file */;
  style?: CSSProperties;
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
  onError?: () => void /** trigger when image is loaded ==> default: null */;
}

const ImgInner: React.FC<IImg> = ({ src, alt, resolution, children, onLoad, style, onError, ...props }) => {
  const imgRef = useRef<any>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        setLoaded(true);
        onLoad && onLoad();
      } else {
        imgRef.current.onload = () => {
          setLoaded(true);
          onLoad && onLoad();
        };
        imgRef.current.onerror = () => {
          setLoaded(false);
          onError && onError();
        };
      }
    }

    return () => {
      if (imgRef.current && imgRef.current.onload) {
        imgRef.current.onload = null;
      }
      if (imgRef.current && imgRef.current.onerror) {
        imgRef.current.onerror = null;
      }
    };
  }, [src]);

  const _src = src.includes("?") ? src : src + `?w=${resolution}`;
  return (
    <SImg loaded={loaded} {...props}>
      <img {...props} src={_src} alt={alt} ref={imgRef as any} style={style} />
      {children}
    </SImg>
  );
};

export const Img = memo(({ lazyload = true, cover = true, ...props }: IImg) => {
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
});
