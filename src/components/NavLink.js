import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';

const NavLink = () => (
  <header className={styles.containerHeader}>
    <div className={styles.header}>
      <h1>BookStore CMS</h1>
      <nav>
        <Link className={styles.links} to="/"> BOOK</Link>
        <Link className={styles.links} to="/categories">CATEGORIES</Link>
      </nav>
    </div>
    <div>
      <p className={styles.iconUser}>...</p>
    </div>
  </header>

);

export default NavLink;
