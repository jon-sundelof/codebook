import styles from '../../../styles/shared/Navbar.module.scss';
import * as ROUTES from '../../../constants/routes';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar_wrapper}>
      <h1>
        <Link href={ROUTES.LANDING}>SUNDELOF</Link>
      </h1>
      <ul>
        <li className={styles.nav_item}>
          <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
