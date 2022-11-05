import Image from 'next/image';

interface CoverImageProps {
  source: string;
}

const CoverImage = ({ source }: CoverImageProps) => {
  // console.log(props);

  return (
    <>
      <Image
        src={`https:${source}`}
        alt="section cover"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
      />
    </>
  );
};

export default CoverImage;
