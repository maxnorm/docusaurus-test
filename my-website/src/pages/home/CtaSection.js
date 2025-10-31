import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to build with Compose?
          </Heading>
          <p className={styles.ctaDescription}>
            Start creating modular, maintainable smart contracts with our comprehensive documentation.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/docs" className={clsx(styles.ctaButton, styles.ctaPrimary)}>
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/docs/getting-started/quick-start" className={clsx(styles.ctaButton, styles.ctaSecondaryLight)}>
              <span>View Quick Start</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

