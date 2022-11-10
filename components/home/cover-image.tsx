import Image from 'next/image';

interface CoverImageProps {
  source: string;
  style?: object;
}
interface LoaderProps {
  src: string;
}

const loader = ({ src }: LoaderProps) => {
  return `https:${src}`;
};

const CoverImage = ({ source, style }: CoverImageProps) => {
  return (
    <Image
      loader={loader}
      src={source}
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
