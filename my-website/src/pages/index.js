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
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.badge}>⚠️ Early Stage - Not Production Ready</span>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p style={{fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', margin: '0 auto 2rem'}}>
            A smart contract library for building diamond-based systems with an on-chain standard library of facets.
            Write code that's designed to be understood.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started →
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/core-concepts/facets-and-libraries"
              style={{marginLeft: '1rem'}}>
              Learn Core Concepts
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <a href="https://github.com/Perfect-Abstractions/Compose" target="_blank" rel="noopener noreferrer">
              ⭐ Star on GitHub
            </a>
            <a href="https://discord.gg/compose" target="_blank" rel="noopener noreferrer">
              💬 Join Discord
            </a>
            <a href="/docs/contributing">
              🤝 Contribute
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
        <div className="row">
          <div className="col col--6">
            <Heading as="h2" className="gradient-text" style={{fontSize: '2rem'}}>
              Shared Storage Architecture
            </Heading>
            <p style={{fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Both facets and libraries access the <strong>same storage</strong> in your diamond.
              Your custom facets can extend Compose functionality without inheritance.
            </p>
            <ul style={{fontSize: '1rem', lineHeight: '1.8'}}>
              <li><strong>Facets</strong>: Complete, reusable implementations</li>
              <li><strong>Libraries</strong>: Helper functions for custom facets</li>
              <li><strong>Shared Storage</strong>: Both work with the same data</li>
            </ul>
            <Link
              className="button button--primary"
              to="/docs/core-concepts/facets-and-libraries">
              Learn More →
            </Link>
          </div>
          <div className="col col--6">
            <div className={styles.codeBlock}>
              <pre style={{padding: '1.5rem', borderRadius: '0.5rem', fontSize: '0.9rem'}}>
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

        // Use LibERC721 - same storage as ERC721Facet!
        LibERC721.mint(player, tokenId);

        // Player can now use standard ERC721Facet
        // functions like transfer(), approve(), etc.
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
        <div className="row">
          <div className="col col--3">
            <div className={styles.statCard}>
              <div className={styles.statNumber}>MIT</div>
              <div className={styles.statLabel}>Open Source</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.statCard}>
              <div className={styles.statNumber}>ERC-2535</div>
              <div className={styles.statLabel}>Diamond Standard</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.statCard}>
              <div className={styles.statNumber}>17+</div>
              <div className={styles.statLabel}>Contributors</div>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.statCard}>
              <div className={styles.statNumber}>🩵</div>
              <div className={styles.statLabel}>Community Built</div>
            </div>
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
