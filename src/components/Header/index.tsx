import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
