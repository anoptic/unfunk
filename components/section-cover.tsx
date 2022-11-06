import Image from 'next/image';

interface SectionCoverProps {
  source: string;
}
export interface LoaderProps {
  src: string;
}

export const loader = ({ src }: LoaderProps) => {
  return `https:${src}`;
};

const SectionCover = ({ source }: SectionCoverProps) => {
  // console.log(props);

  return (
    <>
      <Image
        loader={loader}
        src={source}
        alt="section cover"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkKAcAAH0AecUT9IwAAAAASUVORK5CYII="
      />
    </>
  );
};

export default SectionCover;
