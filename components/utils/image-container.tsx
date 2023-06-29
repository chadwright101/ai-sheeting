"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt || "A&I Sheeting"}
      src={src}
      width={width}
      height={height}
      quality={isLoading ? 5 : quality ?? 60}
      loading={eager ? "eager" : "lazy"}
      className={cssClasses}
      onClick={onClick}
      onLoadStart={() => setLoading(true)}
      onLoadingComplete={() => setLoading(false)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sizes={`(max-width: 425px) ${
        isLoading ? smallest! / 10 : smallest
      }vw,(max-width: 650px) ${
        isLoading ? phone! / 10 : phone
      }vw, (max-width: 900px) ${
        isLoading ? tablet! / 10 : tablet
      }vw, (max-width: 1100px) ${
        isLoading ? tabletLarge! / 10 : tabletLarge
      }vw, (max-width: 1400px) ${
        isLoading ? desktopSmall! / 10 : desktopSmall
      }vw, ${isLoading ? desktop! / 10 : desktop}vw `}
    />
  );
};

export default ImageContainer;
