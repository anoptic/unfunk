import Image, { StaticImageData } from 'next/image';
// import ObjectFit from 'next/image'

interface ImageDisplayProps {
  source: string | StaticImageData;
  alt?: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  height?: number;
  width?: number;
  style?: object;
}

const ImageDisplay = ({
  source,
  alt = '',
  layout = 'fill',
  fit = 'cover',
  height,
  width,
  style,
}: ImageDisplayProps) => {
  return (
    <Image
      src={`https:${source}`}
      alt={alt}
      layout={layout}
      objectFit={fit}
      height={height}
      width={width}
      style={style}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
    />
  );
};

export default ImageDisplay;
