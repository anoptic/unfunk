import { useState } from 'react';
import { Asset } from 'contentful';
import Image from 'next/image';
import styles from './product-carousel.module.css';
import arrow from './arrow';
import Arrow from './arrow';

interface CarouselProps {
  images: Asset[];
}

const ProductCarousel = ({ images }: CarouselProps) => {
  const [imgArray, updateImageArray] = useState(images);
  // console.log('carousel', images);

  const scrollRight = () => {
    const newImgArray = imgArray.slice(-1).concat(imgArray.slice(0, -1));
    updateImageArray(() => newImgArray);
  };

  const scrollLeft = () => {
    const newImgArray = imgArray.slice(1).concat(imgArray.slice(0, 1));
    updateImageArray(() => newImgArray);
  };

  return (
    <div className={styles.carouselContainer}>
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
        {/* <h3>Product Carousel</h3> */}
        {imgArray.map((image) => (
          <div key={image.fields.file.fileName} className={styles.image}>
            <Image
              src={`https:${image.fields.file.url}`}
              alt="shoe"
              layout="fixed"
              // objectFit="contain"
              height={180}
              width={180}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
