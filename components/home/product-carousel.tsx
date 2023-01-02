import Image from 'next/image';
import styles from './product-carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper';
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
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={4}
          grabCursor
          loop
          loopedSlides={8}
          slidesPerView="auto"
          centeredSlides
          className={styles.swiper}
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.fields.file.fileName}
              className={styles.slide}
            >
              <Link href={`/shoes/${image.fields.description}`}>
                <Image
                  src={`https:${image.fields.file.url}`}
                  alt="shoe"
                  layout="fixed"
                  height={180}
                  width={180}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
