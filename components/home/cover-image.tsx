import Image, { StaticImageData } from 'next/image';

interface CoverImageProps {
  source: string | StaticImageData;
  style?: object;
}
const CoverImage = ({ source, style }: CoverImageProps) => {
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

export default CoverImage;
