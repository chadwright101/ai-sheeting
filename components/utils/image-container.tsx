"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  width: number;
  height: number;
  smallest?: number;
  phone?: number;
  tablet?: number;
  tabletLarge?: number;
  desktopSmall?: number;
  desktop?: number;
  cssClasses?: string;
  quality?: number;
  eager?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageContainer = ({
  src,
  alt,
  width,
  height,
  smallest,
  phone,
  tablet,
  tabletLarge,
  desktop,
  desktopSmall,
  cssClasses,
  quality,
  eager,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) => {
  return (
    <Image
      alt={alt || "A&I Sheeting"}
      src={src}
      width={width}
      height={height}
      quality={quality ?? 60}
      loading={eager ? "eager" : "lazy"}
      className={cssClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sizes={`(max-width: 425px) ${smallest}vw,(max-width: 650px) ${phone}vw, (max-width: 900px) ${tablet}vw, (max-width: 1100px) ${tabletLarge}vw, (max-width: 1400px) ${desktopSmall}vw, ${desktop}vw `}
    />
  );
};

export default ImageContainer;
