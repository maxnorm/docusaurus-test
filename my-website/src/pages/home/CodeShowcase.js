import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from '../index.module.css';

export default function CodeShowcase() {
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
            <Link to="/docs/foundations/facets-and-libraries" className={styles.showcaseLink}>
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



