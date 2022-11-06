import styles from '../styles/carousel.module.css';

interface CarouselProps {
  images: any[];
}

const ProductCarousel = ({ images }: CarouselProps) => {
  console.log('carousel', images);

  return (
    <section className={styles.carousel}>
      <h3>Product Carousel</h3>
    </section>
  );
};

export default ProductCarousel;
