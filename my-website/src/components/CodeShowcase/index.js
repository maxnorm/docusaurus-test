import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

export default function CodeShowcase({ examples, title, description }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.showcase}>
      {title && <h3 className={styles.showcaseTitle}>{title}</h3>}
      {description && <p className={styles.showcaseDescription}>{description}</p>}
      
      <div className={styles.tabs}>
        {examples.map((example, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {example.label}
          </button>
        ))}
      </div>

      <div className={styles.codeContainer}>
        {examples[activeTab].description && (
          <div className={styles.exampleDescription}>
            {examples[activeTab].description}
          </div>
        )}
        <CodeBlock language={examples[activeTab].language || 'solidity'}>
          {examples[activeTab].code}
        </CodeBlock>
      </div>
    </div>
  );
}

