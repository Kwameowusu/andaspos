// NavBar.jsx

import { ExpandIcon } from '../../assets/ExpandIcon';
import { PrinterIcon } from '../../assets/PrinterIcon';
import styles from './TopNavigationBar.module.css';

export const TopNavigationBar = () => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Request fullscreen
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      // Exit fullscreen
      document.exitFullscreen();
    }
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img src="https://margaherita.fra1.cdn.digitaloceanspaces.com/chrisbsite/pizzamanchickenmanlogo.png" alt="Andas POS Logo" className={styles.logo} />
        </div>
      </div>

      <div className={styles.titleSection}>
        <h1 className={styles.title}>Andas POS System</h1>
      </div>

      <div className={styles.actionsSection}>
        <button className={styles.actionButton} onClick={toggleFullscreen} >
          <span className={styles.expandIcon}><ExpandIcon/></span>
        </button>

        <button className={styles.actionButton}>
          <span className={styles.printIcon}><PrinterIcon/></span>
        </button>

        <div className={styles.userSection}>
          <div className={styles.userInitial}>P</div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>PRINCE</div>
            <div className={styles.userLocation}>North Kaneshie</div>
          </div>
          <span className={styles.dropdownIcon}>▼</span>
        </div>
      </div>
    </header>
  );
};