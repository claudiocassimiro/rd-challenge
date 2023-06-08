import Image from "next/image";

interface ImageComponentAttributes {
  src: string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
  className?: string;
}

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
}: ImageComponentAttributes) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
