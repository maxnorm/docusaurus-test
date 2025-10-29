import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AnimatedBackground from '@site/src/components/AnimatedBackground';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <AnimatedBackground />
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>⚠️ Early Stage - Not Production Ready</span>
          </div>
          <Heading as="h1" className={clsx("hero__title", styles.heroTitle)}>
            Build with {siteConfig.title}
          </Heading>
          <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <p className={styles.heroDescription}>
            A smart contract library for building diamond-based systems with an on-chain standard library of facets.
            Write code that's designed to be understood, maintained, and scaled.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--secondary button--lg", styles.buttonPrimary)}
              to="/docs/intro">
              Get Started →
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.buttonSecondary)}
              to="/docs/core-concepts/facets-and-libraries">
              Learn Core Concepts
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <a href="https://github.com/Perfect-Abstractions/Compose" target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
              <span className={styles.quickLinkIcon}>⭐</span>
              <span>Star on GitHub</span>
            </a>
            <a href="https://discord.gg/compose" target="_blank" rel="noopener noreferrer" className={styles.quickLink}>
              <span className={styles.quickLinkIcon}>💬</span>
              <span>Join Discord</span>
            </a>
            <a href="/docs/contributing" className={styles.quickLink}>
              <span className={styles.quickLinkIcon}>🤝</span>
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Shared Storage Architecture
          </Heading>
          <p className={styles.sectionDescription}>
            Build powerful smart contracts with facets and libraries that work together seamlessly
          </p>
        </div>
        <div className={clsx("row", styles.codeRow)}>
          <div className="col col--6">
            <div className={styles.featureContent}>
              <p className={styles.featureDescription}>
                Both facets and libraries access the <strong>same storage</strong> in your diamond.
                Your custom facets can extend Compose functionality without inheritance.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📦</div>
                  <div>
                    <h3 className={styles.featureItemTitle}>Facets</h3>
                    <p className={styles.featureItemDesc}>Complete, reusable implementations</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔧</div>
                  <div>
                    <h3 className={styles.featureItemTitle}>Libraries</h3>
                    <p className={styles.featureItemDesc}>Helper functions for custom facets</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💾</div>
                  <div>
                    <h3 className={styles.featureItemTitle}>Shared Storage</h3>
                    <p className={styles.featureItemDesc}>Both work with the same data</p>
                  </div>
                </div>
              </div>
              <Link
                className={clsx("button button--primary button--lg", styles.learnMoreButton)}
                to="/docs/core-concepts/facets-and-libraries">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={styles.codeFilename}>GameNFTFacet.sol</span>
              </div>
              <pre className={styles.codePre}>
{`// Your custom facet uses LibERC721
import {LibERC721} from "compose/LibERC721.sol";

contract GameNFTFacet {
    function mintWithGameLogic(
        address player,
        uint256 tokenId
    ) external {
        // Your custom game logic
        require(
            playerHasEnoughPoints(player),
            "Not enough points"
        );

        // Use LibERC721 - same storage!
        LibERC721.mint(player, tokenId);

        // Standard ERC721Facet functions
        // work seamlessly
        updatePlayerStats(player);
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📜</div>
            <div className={styles.statNumber}>MIT</div>
            <div className={styles.statLabel}>Open Source</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💎</div>
            <div className={styles.statNumber}>ERC-2535</div>
            <div className={styles.statLabel}>Diamond Standard</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statNumber}>17+</div>
            <div className={styles.statLabel}>Contributors</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🩵</div>
            <div className={styles.statNumber}>Community</div>
            <div className={styles.statLabel}>Built with Love</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Smart Contract Development`}
      description="Compose is a smart contract library for ERC-2535 Diamonds. Build readable, composable smart contracts with on-chain standard library facets.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CodeExample />
        <StatsSection />
      </main>
    </Layout>
  );
}
