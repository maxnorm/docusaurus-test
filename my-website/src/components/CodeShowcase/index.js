import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

export default function CodeShowcase({ examples, title, description }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabKeyDown = (event, index) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const direction = event.key === 'ArrowLeft' ? -1 : 1;
      const nextIndex = (index + direction + examples.length) % examples.length;
      setActiveTab(nextIndex);
      event.target.parentElement.children[nextIndex]?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActiveTab(0);
      event.target.parentElement.children[0]?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      const lastIndex = examples.length - 1;
      setActiveTab(lastIndex);
      event.target.parentElement.children[lastIndex]?.focus();
    }
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.tabs} role="tablist" aria-label={title || 'Code examples'}>
        {examples.map((example, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`code-panel-${index}`}
            id={`code-tab-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleTabKeyDown(e, index)}
          >
            {example.label}
          </button>
        ))}
      </div>
      <div className={styles.codeContainer}>
        <div
          role="tabpanel"
          id={`code-panel-${activeTab}`}
          aria-labelledby={`code-tab-${activeTab}`}
          tabIndex={0}
        >
          <CodeBlock language={examples[activeTab].language || 'solidity'}>
            {examples[activeTab].code}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}

