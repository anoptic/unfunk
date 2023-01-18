import Logo from '@/header/logo';
import styles from './footer.module.css';

const Footer = () => {
  // console.log(props);

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Logo />
            <p className={styles.tag}>shoes you need</p>
          </div>
        </div>
        <div className={styles.signup}>
          <div className={styles.cta}>
            <p className={styles.ctaTitle}>Sign-up for our Newsletter</p>
            <p className={styles.ctaInfo}>
              Get advanced notice about events and new releases, and 10% off
              your first purchase!
            </p>
            <form action="submit" className={styles.form}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                className={styles.email}
              />
              <button type="button" className={`button ${styles.btn}`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
