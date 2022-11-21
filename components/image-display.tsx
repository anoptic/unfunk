import Image, { StaticImageData } from 'next/image';
// import ObjectFit from 'next/image'

interface ImageDisplayProps {
  source: string | StaticImageData;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  style?: object;
}

const ImageDisplay = ({ source, fit = 'cover', style }: ImageDisplayProps) => {
  return (
    <Image
      src={`https:${source}`}
      alt="section cover"
      layout="fill"
      objectFit={fit}
      style={style}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
    />
  );
};

export default ImageDisplay;
