import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const icons = {
  info: '💡',
  tip: '✨',
  warning: '⚠️',
  danger: '🚨',
  success: '✅',
  note: '📝',
};

export default function CalloutBox({ children, type = 'info', title }) {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>{icons[type]}</span>
        <span className={styles.calloutTitle}>
          {title || type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className={styles.calloutContent}>
        {children}
      </div>
    </div>
  );
}

