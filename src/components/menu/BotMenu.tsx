import { Link } from 'react-router-dom';
import styles from './menu.module.css';

/**
 * Minimal menu shown to detected bots. Customize as needed.
 */
function BotMenu() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Hotel resorts
      </Link>
    </header>
  );
}

export default BotMenu;
