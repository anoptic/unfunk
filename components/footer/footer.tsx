import Logo from '@/header/logo';
import { FormEvent } from 'react';
import styles from './footer.module.css';
import useAlert from 'hooks/useAlert';
import Alert from '@/alert';

const Footer = () => {
  const { alertOpen, openAlert, closeAlert } = useAlert();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Please enter a valid email address');
    openAlert();
  };

  return (
    <>
      <Alert open={alertOpen} closeAlert={closeAlert}>
        Please enter a valid email address
      </Alert>

      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Logo />
              <p className={styles.tag}>shoes you need</p>
            </div>
          </div>
          <div className={styles.signup}>
            <div></div>
            <div className={styles.cta}>
              <p className={styles.ctaTitle}>Sign-up for our Newsletter</p>
              <p className={styles.ctaInfo}>
                Get advanced notice about events and new releases, and 10% off
                your first purchase!
              </p>
              <form
                action="submit"
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className={styles.email}
                />
                <button type="submit" className="button">
                  Subscribe
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
