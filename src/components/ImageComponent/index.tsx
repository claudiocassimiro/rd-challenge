import Image from "next/image";

interface ImageComponentAttributes {
  src: string;
  alt: string;
  width?: number | undefined;
  height?: number | undefined;
  className?: string;
  hasPriority?: boolean;
  dataAos?: string;
}

export default function ImageComponent({
  src,
  alt,
  width,
  height,
  className,
  hasPriority = false,
  dataAos,
}: ImageComponentAttributes) {
  return width && height ? (
    <Image
      data-testid="image-not-fill"
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={hasPriority}
      data-aos={dataAos}
    />
  ) : (
    <Image
      data-testid="image-fill"
      className={className}
      src={src}
      alt={alt}
      fill
      priority={hasPriority}
      data-aos={dataAos}
    />
  );
}
