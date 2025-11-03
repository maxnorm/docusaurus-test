import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import GitHubStarButton from '@site/src/components/navigation/GitHubStarButton';
import Icon from '../../components/ui/Icon';
import styles from './homepageHeader.module.css';

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient}></div>
        <div className={styles.heroPattern}></div>
      </div>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <Icon name="warning" size={20} /> Early Stage - Not Production Ready
            </span>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Build the future of<br />
            <span className={styles.heroTitleGradient}>Smart Contracts</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>
          <p className={styles.heroDescription}>
            A smart contract library for building diamond-based systems with an on-chain 
            standard library of facets. Write code that's designed to be understood, 
            maintained, and scaled.
          </p>
          <div className={styles.heroCta}>
            <Link
              className={clsx(styles.ctaButton, styles.ctaPrimary)}
              to="/docs">
              <span>Get Started</span>
              <Icon name="arrow-right" size={20} />
            </Link>
            <Link
              className={clsx(styles.ctaButton, styles.ctaSecondary)}
              to="/">
              <span>Learn Core Concepts</span>
            </Link>
          </div>
          <div className={styles.heroLinks}>
            <a href="https://github.com/Perfect-Abstractions/Compose" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              <Icon name="github" size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://discord.gg/compose" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={styles.heroLink}>
              <Icon name="discord" size={20} />
              <span>Join Discord</span>
            </a>
            <Link to="/docs/contribution" className={styles.heroLink}>
              <Icon name="users" size={20} />
              <span>Contribute</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroWave}>
        <img src="/icons/wave.svg" alt="" aria-hidden="true" />
      </div>
    </header>
  );
}


