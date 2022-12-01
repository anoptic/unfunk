import { useState } from 'react';
import { Asset } from 'contentful';
import Image from 'next/image';
import styles from './product-carousel.module.css';
import arrow from './arrow';
import Arrow from './arrow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

interface CarouselProps {
  images: Asset[];
}

const ProductCarousel = ({ images }: CarouselProps) => {
  // const [imgArray, updateImageArray] = useState(images);
  // // console.log('carousel', images);

  // const scrollRight = () => {
  //   const newImgArray = imgArray.slice(-1).concat(imgArray.slice(0, -1));
  //   updateImageArray(() => newImgArray);
  // };

  // const scrollLeft = () => {
  //   const newImgArray = imgArray.slice(1).concat(imgArray.slice(0, 1));
  //   updateImageArray(() => newImgArray);
  // };

  return (
    <>
      {/* <div> */}
      {/* <div className={styles.carouselContainer}>
        <div className={styles.arrowContainer}>
          <button className={styles.arrowBtn} onClick={scrollLeft}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </button>
          <button className={styles.arrowBtn} onClick={scrollRight}>
            <div className={`${styles.arrowR} ${styles.arrow}`}>
              <Arrow />
            </div>
          </button>
        </div>
        <div className={styles.carousel}>
          {imgArray.map((image) => (
            <div key={image.fields.file.fileName} className={styles.image}>
              <Image
                src={`https:${image.fields.file.url}`}
                alt="shoe"
                layout="fixed"
                height={180}
                width={180}
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* </div> */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        navigation
        loop
        // loopedSlides={8}
        slidesPerView={2}
        centeredSlides
      >
        {images.map((image) => (
          <SwiperSlide key={image.fields.file.fileName}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt="shoe"
              layout="fixed"
              height={180}
              width={180}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;
