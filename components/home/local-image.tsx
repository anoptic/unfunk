import Image, { StaticImageData } from 'next/image';

interface CoverImageProps {
  source: StaticImageData;
}

const CoverImage = ({ source }: CoverImageProps) => {
  return (
    <Image
      // loader={loader}
      src={source}
      alt="menu cover"
      // layout="fill"
      // objectFit="cover"
      // style={style}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
    />
  );
};

export default CoverImage;
