import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
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
              ⚠️ Early Stage - Not Production Ready
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
              to="/docs/intro">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              className={clsx(styles.ctaButton, styles.ctaSecondary)}
              to="/docs/core-concepts/facets-and-libraries">
              <span>Learn Core Concepts</span>
            </Link>
          </div>
          <div className={styles.heroLinks}>
            <a href="https://github.com/Perfect-Abstractions/Compose" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={styles.heroLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span>Star on GitHub</span>
            </a>
            <a href="https://discord.gg/compose" 
               target="_blank" 
               rel="noopener noreferrer" 
               className={styles.heroLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Join Discord</span>
            </a>
            <Link to="/docs/contributing" className={styles.heroLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
              </svg>
              <span>Contribute</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroWave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor"/>
        </svg>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Read First',
      description: 'Code written to be understood first, not just executed. Every facet is self-contained and readable top-to-bottom.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
        </svg>
      ),
      title: 'Diamond-Native',
      description: 'Built specifically for ERC-2535 Diamonds. Deploy facets once, reuse them across multiple diamonds on-chain.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
        </svg>
      ),
      title: 'Composition Over Inheritance',
      description: 'Combine deployed facets instead of inheriting contracts. Build complex systems from simple, reusable pieces.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <path d="M12 18h.01"/>
        </svg>
      ),
      title: 'Intentional Simplicity',
      description: 'Smart Contract Oriented Programming (SCOP) - designed specifically for smart contracts, not general software.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'On-Chain Standard Library',
      description: 'Access verified, audited facets deployed on multiple blockchains. ERC-20, ERC-721, access control, and more.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'Community-Driven',
      description: 'Built with love by the community. Join us in creating the standard library for ERC-2535 Diamonds.',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Why Compose</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Rethinking Smart Contract Development
          </Heading>
          <p className={styles.sectionSubtitle}>
            Forget traditional smart contract design patterns. Compose takes a radically 
            different approach with Smart Contract Oriented Programming.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className={styles.showcaseGrid}>
          <div className={styles.showcaseContent}>
            <span className={styles.showcaseBadge}>Shared Storage Architecture</span>
            <Heading as="h2" className={styles.showcaseTitle}>
              Facets and Libraries Working Together
            </Heading>
            <p className={styles.showcaseDescription}>
              Both facets and libraries access the same storage in your diamond. 
              Your custom facets can extend Compose functionality without inheritance.
            </p>
            <div className={styles.showcaseFeatures}>
              <div className={styles.showcaseFeature}>
                <div className={styles.showcaseFeatureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  </svg>
                </div>
                <div>
                  <h4>Facets</h4>
                  <p>Complete, reusable implementations</p>
                </div>
              </div>
              <div className={styles.showcaseFeature}>
                <div className={styles.showcaseFeatureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div>
                  <h4>Libraries</h4>
                  <p>Helper functions for custom facets</p>
                </div>
              </div>
              <div className={styles.showcaseFeature}>
                <div className={styles.showcaseFeatureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div>
                  <h4>Shared Storage</h4>
                  <p>Both work with the same data</p>
                </div>
              </div>
            </div>
            <Link to="/docs/core-concepts/facets-and-libraries" className={styles.showcaseLink}>
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className={styles.showcaseCode}>
            <div className={styles.codeWindow}>
              <div className={styles.codeWindowHeader}>
                <div className={styles.codeWindowDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.codeWindowTitle}>GameNFTFacet.sol</span>
              </div>
              <pre className={styles.codeWindowContent}>
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
  const stats = [
    { label: 'Open Source', value: 'MIT', icon: '📜' },
    { label: 'Diamond Standard', value: 'ERC-2535', icon: '💎' },
    { label: 'Contributors', value: '17+', icon: '👥' },
    { label: 'Built with Love', value: 'Community', icon: '🩵' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
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
            <Link to="/docs/intro" className={clsx(styles.ctaButton, styles.ctaPrimary)}>
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Smart Contract Development`}
      description="Compose is a smart contract library for ERC-2535 Diamonds. Build readable, composable smart contracts with on-chain standard library facets.">
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <CodeShowcase />
        <StatsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
