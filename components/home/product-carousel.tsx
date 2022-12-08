import Image from 'next/image';
import styles from './product-carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { AssetType, ProductType } from 'contentful/content-models';
import Link from 'next/link';

interface CarouselProps {
  images: AssetType[];
}

const ProductCarousel = ({ images }: CarouselProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        grabCursor
        loop
        // loopedSlides={8}
        slidesPerView={2}
        centeredSlides
        // breakpoints={{
        //   540: {
        //     slidesPerView: 3,
        //   },
        //   720: {
        //     slidesPerView: 4,
        //   },
        //   900: {
        //     slidesPerView: 5,
        //   },
        //   1080: {
        //     slidesPerView: 6,
        //   },
        //   1260: {
        //     slidesPerView: 7,
        //   },
        //   1440: {
        //     slidesPerView: 8,
        //   },
        // }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.fields.file.fileName}>
            {/* <Link href={`/shoes/${image.fields.description}`}> */}
            <Image
              src={`https:${image.fields.file.url}`}
              alt="shoe"
              layout="fixed"
              height={180}
              width={180}
            />
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
