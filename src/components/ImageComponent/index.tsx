import Image from "next/image";

interface ImageComponentAttributes {
  src: string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
  className?: string;
  hasPriority?: boolean;
}

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
  hasPriority = false,
}: ImageComponentAttributes) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={hasPriority}
    />
  );
};

export default ImageComponent;