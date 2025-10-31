import {useGithubContributorsCount} from '../../hooks/useGithubContributorsCount';
import styles from '../index.module.css';

export default function StatsSection() {
  const {value: contributorsValue} = useGithubContributorsCount({
    owner: 'Perfect-Abstractions',
    repo: 'Compose',
    defaultValue: '17+',
  });

  const stats = [
    { label: 'Open Source', value: 'MIT', icon: '📜' },
    { label: 'Diamond Standard', value: 'ERC-2535', icon: '💎' },
    { label: 'Contributors', value: contributorsValue, icon: '👥' },
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

