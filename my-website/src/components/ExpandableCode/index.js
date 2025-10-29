import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * ExpandableCode Component - Collapsible long code blocks
 * 
 * @param {string} language - Code language
 * @param {number} maxLines - Maximum lines before collapsing (default: 10)
 * @param {string} title - Optional title
 * @param {ReactNode} children - Code content
 */
export default function ExpandableCode({ 
  language = 'javascript',
  maxLines = 10,
  title,
  children
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const codeRef = React.useRef(null);
  const [needsExpansion, setNeedsExpansion] = React.useState(false);

  React.useEffect(() => {
    if (codeRef.current) {
      const lines = codeRef.current.textContent.split('\n').length;
      setNeedsExpansion(lines > maxLines);
    }
  }, [children, maxLines]);

  const codeContent = typeof children === 'string' ? children : children?.props?.children || '';

  return (
    <div className={styles.expandableCode}>
      {title && <div className={styles.codeTitle}>{title}</div>}
      <div className={styles.codeWrapper}>
        <pre
          ref={codeRef}
          className={clsx(
            styles.codeBlock,
            !isExpanded && needsExpansion && styles.codeBlockCollapsed
          )}
        >
          <code className={`language-${language}`}>{codeContent}</code>
        </pre>
        {needsExpansion && (
          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse code' : 'Expand code'}
          >
            {isExpanded ? (
              <>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 12.5L10 7.5L15 12.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Show More ({codeRef.current?.textContent.split('\n').length - maxLines} more lines)
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}


