import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  phoneWidth?: number;
  tabletWidth?: number;
  desktopWidth: number;
  cssClasses?: string;
  pictureCssClasses?: string;
  quality?: number;
  eager?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageContainer = ({
  src,
  alt,
  phoneWidth,
  tabletWidth,
  desktopWidth,
  cssClasses,
  pictureCssClasses,
  quality,
  eager,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) => {
  const imageQuality = quality ?? 60;

  return (
    <picture className={pictureCssClasses}>
      {phoneWidth && (
        <source
          media="(max-width:425px)"
          srcSet={`https://ik.imagekit.io/thewrightdesigns/a&i-sheeting/tr:w-${phoneWidth},q-${imageQuality}${src}`}
        />
      )}
      {tabletWidth && (
        <source
          media="(max-width:800px)"
          srcSet={`https://ik.imagekit.io/thewrightdesigns/a&i-sheeting/tr:w-${tabletWidth},q-${imageQuality}${src}`}
        />
      )}
      <Image
        alt={alt || "A&I Sheeting"}
        src={`https://ik.imagekit.io/thewrightdesigns/a&i-sheeting/tr:w-${desktopWidth},q-${imageQuality}${src}`}
        width={desktopWidth}
        height={desktopWidth * 1.25}
        quality={imageQuality}
        loading={eager ? "eager" : "lazy"}
        className={cssClasses}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </picture>
  );
};

export default ImageContainer;
