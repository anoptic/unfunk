import Image, { StaticImageData } from 'next/image';

interface ImageDisplayProps {
  source: string | StaticImageData;
  style?: object;
}

const ImageDisplay = ({ source, style }: ImageDisplayProps) => {
  return (
    <Image
      src={`https:${source}`}
      alt="section cover"
      layout="fill"
      objectFit="cover"
      style={style}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
    />
  );
};

export default ImageDisplay;
