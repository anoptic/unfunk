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
          modules={[Navigation, A11y]}
          navigation={true}
          spaceBetween={4}
          autoHeight
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
                <div className={styles.slideImage}>
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt="shoe"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
