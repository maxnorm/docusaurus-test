import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * Callout Component - Enhanced admonition-style component
 * 
 * @param {string} type - Callout type ('info', 'warning', 'danger', 'success', 'tip')
 * @param {string} title - Optional title
 * @param {ReactNode} children - Content
 * @param {boolean} icon - Show icon (default: true)
 */
export default function Callout({ 
  type = 'info', 
  title, 
  children,
  icon = true 
}) {
  const icons = {
    info: '💡',
    warning: '⚠️',
    danger: '🚫',
    success: '✅',
    tip: '💡',
    note: '📝'
  };

  return (
    <div className={clsx(styles.callout, styles[`callout--${type}`])}>
      <div className={styles.calloutHeader}>
        {icon && (
          <span className={styles.calloutIcon}>{icons[type] || icons.info}</span>
        )}
        {title && (
          <span className={styles.calloutTitle}>{title}</span>
        )}
      </div>
      <div className={styles.calloutContent}>
        {children}
      </div>
    </div>
  );
}

