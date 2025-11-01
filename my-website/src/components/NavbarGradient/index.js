/**
 * Animated Navbar Gradient Background
 * Subtle animated gradient overlay for the navbar
 */

import React from 'react';
import styles from './styles.module.css';

export default function NavbarGradient() {
  return (
    <div className={styles.gradientContainer}>
      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>
      <div className={styles.gradientOrb3}></div>
    </div>
  );
}

