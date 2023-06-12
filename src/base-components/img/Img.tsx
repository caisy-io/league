import React, { CSSProperties, ReactEventHandler, SyntheticEvent, memo, useRef, useState } from "react";
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
  onLoad?: (e: SyntheticEvent<HTMLImageElement, Event>) => void /** trigger when image is loaded ==> default: null */;
  onError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void /** trigger when image is loaded ==> default: null */;
}

const ImgInner: React.FC<IImg> = ({ src, alt, resolution, children, onLoad, style, onError, ...props }) => {
  const imgRef = useRef<any>();
  const [loaded, setLoaded] = useState(false);

  const handleLoad: ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true);
    onLoad && onLoad(e);
  };

  const handleError: ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(false);
    onError && onError(e);
  };

  const _src = src.includes("?") ? src : src + `?w=${resolution}`;
  return (
    <SImg loaded={loaded} {...props}>
      <img onError={handleError} onLoad={handleLoad} src={_src} alt={alt} ref={imgRef as any} style={style} />
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
